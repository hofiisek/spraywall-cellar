import type { Board, Boulder, Hold } from './types';
import { db } from './firebase';
import { uploadBoardImage, formatBoardVersion } from './storage';
import { computeHomography, applyHomography, remapHolds, type Point } from './calibration';
import { collection, doc, writeBatch } from 'firebase/firestore';

interface OpenArgs {
  currentBoard: Board;
  currentBoulders: Boulder[];
}

const REQUIRED_POINTS = 4;
const POINT_COLORS = ['#f97316', '#22c55e', '#3b82f6', '#ec4899']; // orange, green, blue, pink

type Step = 1 | 2 | 3 | 4;

/**
 * Open the recalibration modal as a 4-step wizard. Nothing reaches Firebase
 * until the user clicks "Confirm recalibration" on step 4.
 *
 *   Step 1: pick the new wall photo (client-side only)
 *   Step 2: click 4 reference holds on the NEW image
 *   Step 3: click the SAME 4 reference holds on the CURRENT board image
 *   Step 4: preview transformed holds → confirm → upload + write
 */
export function openRecalibrationModal(args: OpenArgs): void {
  const { currentBoard, currentBoulders } = args;

  // ---------- Modal-local state ----------
  let step: Step = 1;
  let newImageFile: File | null = null;
  let newImageBlobUrl: string | null = null;
  /** Percent-of-image coords on the new image (step 2) */
  const newPoints: Point[] = [];
  /** Percent-of-image coords on the current image (step 3) */
  const oldPoints: Point[] = [];
  let homography: number[][] | null = null;
  let committing = false;

  // ---------- DOM ----------
  const overlay = document.createElement('div');
  overlay.className =
    'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto';
  overlay.innerHTML = `
    <div class="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto p-4 md:p-6">
      <div class="mb-4">
        <h2 class="text-xl md:text-2xl font-bold">Upload new spraywall image &amp; recalibrate</h2>
        <p id="step-title" class="text-sm text-gray-300 mt-1 font-medium"></p>
        <p id="step-help" class="text-sm text-gray-400"></p>
      </div>

      <!-- Step 1: file picker -->
      <div data-step="1" class="step hidden">
        <label class="block text-sm font-medium mb-2">New spraywall photo</label>
        <input id="image-input" type="file" accept="image/*"
          class="block w-full text-sm text-gray-300 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
      </div>

      <!-- Step 2: click 4 points on NEW image -->
      <div data-step="2" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-new"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="new-img" src="" class="block w-full h-auto select-none" />
          <div id="new-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 3: click same 4 points on CURRENT image -->
      <div data-step="3" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-old"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="old-img" src="" class="block w-full h-auto select-none" />
          <div id="old-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 4: confirmation with preview -->
      <div data-step="4" class="step hidden">
        <p class="text-xs text-gray-400 mb-1">
          Preview: existing boulders' holds remapped onto the new image. Verify alignment, then confirm.
        </p>
        <div class="relative inline-block w-full bg-black">
          <img id="preview-img" src="" class="block w-full h-auto select-none" />
          <div id="preview-overlay" class="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mt-4">
        <button id="btn-back" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">&larr; Back</button>
        <button id="btn-reset" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Reset points</button>
        <button id="btn-next" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600">Next &rarr;</button>
        <button id="btn-confirm" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-700">
          Confirm recalibration
        </button>
        <button id="btn-cancel" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Cancel</button>
      </div>

      <div id="status" class="mt-3 text-sm text-yellow-400"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  // ---------- Refs ----------
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) =>
    overlay.querySelector(sel) as T;

  const titleEl = $('#step-title');
  const helpEl = $('#step-help');
  const stepEls = Array.from(overlay.querySelectorAll<HTMLElement>('.step'));

  const fileInput = $<HTMLInputElement>('#image-input');
  const newImg = $<HTMLImageElement>('#new-img');
  const oldImg = $<HTMLImageElement>('#old-img');
  const previewImg = $<HTMLImageElement>('#preview-img');
  const newOverlay = $('#new-overlay');
  const oldOverlay = $('#old-overlay');
  const previewOverlay = $('#preview-overlay');
  const counterNew = $('#counter-new');
  const counterOld = $('#counter-old');

  const btnBack = $<HTMLButtonElement>('#btn-back');
  const btnReset = $<HTMLButtonElement>('#btn-reset');
  const btnNext = $<HTMLButtonElement>('#btn-next');
  const btnConfirm = $<HTMLButtonElement>('#btn-confirm');
  const btnCancel = $<HTMLButtonElement>('#btn-cancel');
  const statusEl = $('#status');

  // ---------- Helpers ----------
  function setStatus(text: string, kind: 'info' | 'error' | 'success' = 'info') {
    statusEl.textContent = text;
    statusEl.className =
      'mt-3 text-sm ' +
      (kind === 'error' ? 'text-red-400' : kind === 'success' ? 'text-green-400' : 'text-yellow-400');
  }

  function close() {
    if (newImageBlobUrl) URL.revokeObjectURL(newImageBlobUrl);
    overlay.remove();
  }

  function showStep(s: Step) {
    step = s;
    stepEls.forEach((el) => {
      el.classList.toggle('hidden', el.dataset.step !== String(s));
    });

    titleEl.textContent = `Step ${s} of 4`;
    setStatus('');

    // Reset button visibility — set per-step below.
    btnBack.classList.add('hidden');
    btnReset.classList.add('hidden');
    btnNext.classList.add('hidden');
    btnConfirm.classList.add('hidden');

    switch (s) {
      case 1:
        helpEl.textContent = 'Choose the new spraywall photo from your device. Nothing is uploaded yet.';
        // Next button shows once a file is picked.
        break;
      case 2:
        helpEl.textContent = `Click ${REQUIRED_POINTS} distinct, easily-identifiable holds on the NEW image. Remember which ones — you'll click the same holds on the current image next.`;
        btnBack.classList.remove('hidden');
        btnReset.classList.toggle('hidden', newPoints.length === 0);
        if (newPoints.length === REQUIRED_POINTS) btnNext.classList.remove('hidden');
        renderCounter('new');
        renderMarkers(newOverlay, newPoints);
        break;
      case 3:
        helpEl.textContent = `Now click the SAME ${REQUIRED_POINTS} holds on the CURRENT board image, in the SAME order.`;
        btnBack.classList.remove('hidden');
        btnReset.classList.toggle('hidden', oldPoints.length === 0);
        if (oldPoints.length === REQUIRED_POINTS) btnNext.classList.remove('hidden');
        renderCounter('old');
        renderMarkers(oldOverlay, oldPoints);
        break;
      case 4:
        helpEl.textContent = 'Review the transformed boulder positions on the new image. Confirm to upload and save.';
        btnBack.classList.remove('hidden');
        btnConfirm.classList.remove('hidden');
        renderPreview();
        break;
    }
  }

  function renderCounter(which: 'new' | 'old') {
    const el = which === 'new' ? counterNew : counterOld;
    const pts = which === 'new' ? newPoints : oldPoints;
    el.textContent = `${pts.length}/${REQUIRED_POINTS} points`;
  }

  function renderMarkers(layer: HTMLElement, pts: Point[]) {
    layer.innerHTML = '';
    pts.forEach((p, i) => {
      const dot = document.createElement('div');
      dot.style.position = 'absolute';
      dot.style.left = `${p.x}%`;
      dot.style.top = `${p.y}%`;
      dot.style.width = '18px';
      dot.style.height = '18px';
      dot.style.transform = 'translate(-50%, -50%)';
      dot.style.borderRadius = '50%';
      dot.style.background = POINT_COLORS[i] ?? '#fff';
      dot.style.border = '2px solid white';
      dot.style.color = 'white';
      dot.style.fontSize = '11px';
      dot.style.fontWeight = 'bold';
      dot.style.display = 'flex';
      dot.style.alignItems = 'center';
      dot.style.justifyContent = 'center';
      dot.style.pointerEvents = 'none';
      dot.textContent = String(i + 1);
      layer.appendChild(dot);
    });
  }

  function clickToPercent(layer: HTMLElement, e: MouseEvent): Point {
    const rect = layer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    return { x: clamp(x, 0, 100), y: clamp(y, 0, 100) };
  }

  function renderPreview() {
    // Step 3 was OLD/current points; step 2 was NEW. The homography maps
    // OLD-image coordinates (where current boulders live) onto NEW-image
    // coordinates (where we want them after recalibration).
    try {
      const src01 = oldPoints.map((p) => ({ x: p.x / 100, y: p.y / 100 }));
      const dst01 = newPoints.map((p) => ({ x: p.x / 100, y: p.y / 100 }));
      homography = computeHomography(src01, dst01);
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Failed to compute transform', 'error');
      homography = null;
      btnConfirm.classList.add('hidden');
      return;
    }

    previewOverlay.innerHTML = '';
    let visible = 0;
    for (const boulder of currentBoulders) {
      for (const hold of boulder.holds) {
        const { x, y } = applyHomography(homography, { x: hold.x / 100, y: hold.y / 100 });
        const xp = x * 100;
        const yp = y * 100;
        if (xp < -5 || xp > 105 || yp < -5 || yp > 105) continue;
        visible++;
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.left = `${xp}%`;
        dot.style.top = `${yp}%`;
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.transform = 'translate(-50%, -50%)';
        dot.style.borderRadius = '50%';
        dot.style.background = holdColor(hold);
        dot.style.opacity = '0.85';
        dot.style.border = '1px solid black';
        previewOverlay.appendChild(dot);
      }
    }

    setStatus(
      `${visible} hold${visible === 1 ? '' : 's'} mapped onto the new image. Confirm if alignment looks correct.`,
      'info',
    );
  }

  async function commit() {
    if (committing) return;
    if (!homography || !newImageFile) {
      setStatus('Missing transform or image — go back and re-pick points.', 'error');
      return;
    }
    committing = true;
    btnConfirm.disabled = true;
    btnBack.disabled = true;
    btnCancel.disabled = true;
    setStatus('Uploading image…', 'info');

    const now = Date.now();
    const version = formatBoardVersion(new Date(now));
    const newBoardId = `${now}_${version}`;
    try {
      const { url, path, width, height } = await uploadBoardImage(newImageFile, newBoardId);
      setStatus('Writing board & boulders…', 'info');

      const newBoard: Board = {
        id: newBoardId,
        version,
        createdAt: now,
        updatedAt: now,
        recalibrated: true,
        imageUrl: url,
        imagePath: path,
        imageWidth: width,
        imageHeight: height,
      };

      const batch = writeBatch(db);
      batch.set(doc(db, 'boards', newBoardId), newBoard);
      const bouldersCol = collection(db, 'boards', newBoardId, 'boulders');
      for (const boulder of currentBoulders) {
        const remappedHolds: Hold[] = remapHolds(boulder.holds, homography);
        batch.set(doc(bouldersCol, boulder.id), {
          ...boulder,
          holds: remappedHolds,
          updatedAt: now,
        });
      }
      await batch.commit();

      setStatus('Done! New board is live.', 'success');
      setTimeout(close, 600);
    } catch (err) {
      console.error('Recalibration commit failed:', err);
      setStatus(
        err instanceof Error ? `Failed: ${err.message}` : 'Failed to save new board. Check console.',
        'error',
      );
      committing = false;
      btnConfirm.disabled = false;
      btnBack.disabled = false;
      btnCancel.disabled = false;
    }
  }

  // ---------- Wire up ----------
  btnCancel.addEventListener('click', close);

  btnBack.addEventListener('click', () => {
    if (step > 1) showStep((step - 1) as Step);
  });

  btnReset.addEventListener('click', () => {
    if (step === 2) {
      newPoints.length = 0;
      renderMarkers(newOverlay, newPoints);
      renderCounter('new');
      btnReset.classList.add('hidden');
      btnNext.classList.add('hidden');
    } else if (step === 3) {
      oldPoints.length = 0;
      renderMarkers(oldOverlay, oldPoints);
      renderCounter('old');
      btnReset.classList.add('hidden');
      btnNext.classList.add('hidden');
    }
  });

  btnNext.addEventListener('click', () => {
    if (step === 1 && newImageFile) {
      showStep(2);
    } else if (step === 2 && newPoints.length === REQUIRED_POINTS) {
      showStep(3);
    } else if (step === 3 && oldPoints.length === REQUIRED_POINTS) {
      showStep(4);
    }
  });

  btnConfirm.addEventListener('click', commit);

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setStatus('Please select an image file.', 'error');
      return;
    }

    if (newImageBlobUrl) URL.revokeObjectURL(newImageBlobUrl);
    newImageFile = file;
    newImageBlobUrl = URL.createObjectURL(file);

    // Pre-load image into the elements that need it.
    newImg.src = newImageBlobUrl;
    previewImg.src = newImageBlobUrl;
    oldImg.src = currentBoard.imageUrl;

    await Promise.all([waitImage(newImg), waitImage(oldImg)]);

    btnNext.classList.remove('hidden');
    setStatus('Image loaded. Click "Next" to start picking reference holds.', 'info');
  });

  newOverlay.addEventListener('click', (e) => {
    if (newPoints.length >= REQUIRED_POINTS) return;
    newPoints.push(clickToPercent(newOverlay, e as MouseEvent));
    renderMarkers(newOverlay, newPoints);
    renderCounter('new');
    btnReset.classList.remove('hidden');
    if (newPoints.length === REQUIRED_POINTS) btnNext.classList.remove('hidden');
  });

  oldOverlay.addEventListener('click', (e) => {
    if (oldPoints.length >= REQUIRED_POINTS) return;
    oldPoints.push(clickToPercent(oldOverlay, e as MouseEvent));
    renderMarkers(oldOverlay, oldPoints);
    renderCounter('old');
    btnReset.classList.remove('hidden');
    if (oldPoints.length === REQUIRED_POINTS) btnNext.classList.remove('hidden');
  });

  // Open on step 1
  showStep(1);
}

// ----------- Utilities -----------

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function waitImage(img: HTMLImageElement): Promise<void> {
  return new Promise((resolve) => {
    if (img.complete && img.naturalWidth > 0) {
      resolve();
    } else {
      img.addEventListener('load', () => resolve(), { once: true });
      img.addEventListener('error', () => resolve(), { once: true });
    }
  });
}

function holdColor(h: Hold): string {
  switch (h.type) {
    case 'start':
      return '#16a34a'; // green
    case 'feet-only':
      return '#eab308'; // yellow
    case 'middle':
      return '#ffffff';
    case 'top':
      return '#ef4444'; // red
  }
}
