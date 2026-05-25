/**
 * The Spraywall Cellar
 * A spraywall boulder tracking application
 */

import './styles/main.css';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import type { AppState, Board, Boulder, Hold } from './types';
import {
  saveBoulder,
  subscribeToBoulders,
  deleteBoulderFromFirebase,
  subscribeToAllBoards,
} from './storage';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { openRecalibrationModal } from './calibrationUI';

const ADMIN_EMAIL = 'hofiisek@gmail.com';

// ============================================================================
// State
// ============================================================================
let state: AppState = {
  boulders: [],
  currentBoulder: null,
  selectedBoulderId: null,
  mode: 'set',
};

let panzoomInstance: PanzoomObject | null = null;
let currentUser: User | null = null;
let currentHoldType: 'start' | 'feet-only' | 'middle' | 'top' | null = null;
let currentRating: 1 | 2 | 3 | null = null;
let currentTags: Set<string> = new Set();
let sortMode: 'grade' | 'stars' = 'grade';

let activeBoard: Board | null = null;
let allBoards: Board[] = [];
let latestBoardId: string | null = null;
let boardUnsub: (() => void) | null = null;
let bouldersUnsub: (() => void) | null = null;

const READ_ONLY_TOOLTIP = 'Historical board is read-only. Switch to the current board to make changes.';

function isAdmin(): boolean {
  return currentUser?.email === ADMIN_EMAIL;
}

function isViewingLatest(): boolean {
  return !!activeBoard && activeBoard.id === latestBoardId;
}

const AVAILABLE_TAGS = ['Crimps', 'Slopers', 'Pinches', 'Underclings', 'Pockets', 'Dyno', 'Technical'];
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MAX_LENGTH = 250;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate a unique ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Create a new boulder
 */
function createNewBoulder(name: string, grade?: string, description?: string): Boulder {
  const now = Date.now();
  return {
    id: generateId(),
    name,
    grade,
    description,
    holds: [],
    createdAt: now,
    updatedAt: now,
  };
}

// ============================================================================
// HTML Rendering
// ============================================================================

/**
 * Render the HTML structure
 */
function renderHTML(): void {
  const app = document.querySelector('#app')!;
  app.innerHTML = `
    <div class="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-full md:w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
        <div class="mb-3">
          <h1 class="text-xl md:text-2xl font-bold mb-1">The Spraywall Cellar</h1>
          <p class="text-xs md:text-sm text-gray-400">Set boulders. Chalk the fuck up. Send it.</p>
        </div>
        ${currentUser ? `<p class="text-xs text-gray-500 mb-3">Logged in as: ${currentUser.email}</p>` : `<p class="text-xs text-yellow-500 mb-3">⚠️ Login to create/edit/delete boulders</p>`}

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed">
            Set boulders
          </button>
          <button id="mode-climb" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Send hard!
          </button>
        </div>

        <!-- Current Boulder Form -->
        <div id="set-mode-content">
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <input
            type="text"
            id="boulder-name"
            placeholder="Name"
            maxlength="100"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            id="boulder-grade"
            required
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:text-gray-400"
          >
            <option value="" disabled selected>Grade</option>
            ${['5a', '5a+', '5b', '5b+', '5c', '5c+', '6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+']
              .map(g => `<option value="${g}">${g}</option>`)
              .join('')}
          </select>
          <div class="mb-2">
            <div id="boulder-rating" class="flex gap-1">
              ${[1, 2, 3].map(n => `
                <button
                  type="button"
                  data-rating="${n}"
                  class="rating-star p-2 -m-1 text-gray-500 hover:text-amber-300"
                  title="${n} star${n > 1 ? 's' : ''}"
                >
                  <svg class="w-7 h-7 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </button>
              `).join('')}
            </div>
          </div>
          <textarea
            id="boulder-description"
            placeholder="Description (optional)"
            rows="2"
            maxlength="250"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          ></textarea>
          <div id="boulder-tags" class="flex flex-wrap gap-2 mb-3">
            ${AVAILABLE_TAGS.map(tag => `
              <button type="button" data-tag="${tag}" class="px-3 py-1 rounded text-sm bg-gray-600 text-gray-300 hover:bg-gray-500">${tag}</button>
            `).join('')}
          </div>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-3 md:py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded font-medium text-sm md:text-base">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-3 md:py-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded font-medium text-sm md:text-base">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-white hover:bg-gray-200 active:bg-gray-300 text-gray-900 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded font-medium text-sm md:text-base">
              Top
            </button>
          </div>
          <hr class="my-3 border-gray-600" />
          <div class="flex gap-2">
            <button id="btn-save" class="flex-1 px-4 py-3 md:py-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded font-medium text-sm md:text-base">
              Save!
            </button>
            <button id="btn-clear" class="flex-1 px-4 py-3 md:py-2 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 rounded font-medium text-sm md:text-base">
              Clear
            </button>
          </div>
        </div>
        </div>

        <!-- Boulder List -->
        <div id="climb-mode-content" class="flex-1 overflow-y-auto">
          <div class="mb-2">
            <h2 class="inline-flex items-center gap-1 bg-gray-700 rounded px-2 py-1 text-xs font-semibold text-gray-300">
              <span>Board:</span>
              ${isAdmin() ? `
                <select id="board-version-select" class="bg-gray-700 text-gray-300 font-normal cursor-pointer outline-none">
                  <!-- populated by renderBoardSelector() -->
                </select>
              ` : `
                <span id="board-version-label" class="font-normal">${activeBoard ? activeBoard.version : '—'}</span>
              `}
              <span class="font-normal text-gray-500">(<span id="boulder-count">0</span>)</span>
              ${isAdmin() ? `
              <button id="btn-recalibrate" class="ml-1 p-0.5 text-purple-300 hover:text-purple-200 active:text-purple-100" title="Upload new photo & recalibrate">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4" />
                </svg>
              </button>
              ` : ''}
            </h2>
          </div>
          <div class="mb-3">
            <div id="boulder-sort" class="inline-flex bg-gray-700 rounded text-xs overflow-hidden">
              <button data-sort="grade" class="px-2 py-1" title="Sort by grade (hardest first)">Grade</button>
              <button data-sort="stars" class="px-2 py-1" title="Sort by stars (best first)">Stars</button>
            </div>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Login/Logout Button -->
        <div class="mt-3 md:mt-4">
          ${currentUser
            ? `<button id="logout-btn" class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded text-sm">Logout</button>`
            : `<button id="login-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">Login with Google</button>`
          }
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-gray-950 p-2 md:p-3">
        <!-- Frame -->
        <div class="h-full border-4 border-gray-700 rounded-lg shadow-2xl overflow-hidden relative" style="box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
        <!-- Spraywall Image Container -->
          <div id="panzoom-container" class="spraywall-container h-full w-full flex items-center justify-center">
            <div style="position: relative; display: inline-block;">
              <img
                ${activeBoard ? `src="${activeBoard.imageUrl}"` : ''}
                alt="Spraywall"
                class="spraywall-image"
                id="spraywall-img"
                style="display: block;"
              />
              <div id="holds-overlay" class="absolute top-0 left-0 pointer-events-none" style="width: 100%; height: 100%;">
                <!-- Hold markers will be inserted here -->
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// Panzoom & Image Handling
// ============================================================================

/**
 * Initialize panzoom on the spraywall image
 */
function initializePanzoom(): void {
  const container = document.querySelector('#panzoom-container') as HTMLElement;
  const img = document.querySelector('#spraywall-img') as HTMLImageElement;
  if (!container || !img) return;

  // Wait for image to load to calculate proper min scale
  const initPanzoom = () => {
    // Get the frame element (parent of the panzoom container)
    const frame = container.parentElement!;
    const frameWidth = frame.clientWidth;
    const frameHeight = frame.clientHeight;
    // Use rendered (CSS) dimensions, not naturalWidth/Height — the image is laid out by
    // `.spraywall-image { max-width: 100% }`, so its rendered size is what panzoom transforms.
    const imgWidth = img.clientWidth || img.naturalWidth;
    const imgHeight = img.clientHeight || img.naturalHeight;

    // Calculate scale to fit and fill the frame
    const scaleX = frameWidth / imgWidth;
    const scaleY = frameHeight / imgHeight;
    const fitScale = Math.min(scaleX, scaleY); // Fits entirely in frame
    const fillScale = Math.max(scaleX, scaleY); // Fills frame completely

    const startScale = fillScale; // Start at fill scale so the image fills the frame (slight crop on one axis)

    panzoomInstance = Panzoom(container, {
      maxScale: 5,
      minScale: fitScale * 0.9, // Allow zooming out slightly
      cursor: 'grab',
      canvas: true,
      step: 0.1, // Smaller steps for smoother, less aggressive zooming
    });

    // Set initial zoom and center it
    panzoomInstance.zoom(startScale, { animate: false });
    panzoomInstance.pan(0, 0, { animate: false });

    // Enable zooming with mouse wheel
    frame.addEventListener('wheel', (event) => {
      if (!panzoomInstance) return;
      panzoomInstance.zoomWithWheel(event, { step: 0.1 });
    });
  };

  // Wait until the image has real dimensions. `img.complete` is true for an
  // img element with no src yet, which would zero out the fit-scale math.
  if (img.naturalWidth > 0) {
    initPanzoom();
  } else {
    img.addEventListener('load', initPanzoom, { once: true });
  }
}

/**
 * Get panzoom instance (for event listeners)
 */
function getPanzoomInstance(): PanzoomObject | null {
  return panzoomInstance;
}

// ============================================================================
// Hold Management
// ============================================================================

/**
 * Render holds on the image
 */
function renderHolds(): void {
  const overlay = document.querySelector('#holds-overlay') as HTMLElement;
  if (!overlay) return;

  overlay.innerHTML = '';

  const holds = state.currentBoulder?.holds || [];
  const selectedBoulder = state.boulders.find(b => b.id === state.selectedBoulderId);
  const displayHolds = selectedBoulder?.holds || holds;

  displayHolds.forEach((hold) => {
    const marker = document.createElement('div');
    marker.className = `hold-marker ${hold.type}`;
    marker.style.left = `${hold.x}%`;
    marker.style.top = `${hold.y}%`;
    marker.dataset.holdId = hold.id;

    // Allow removing holds on right-click
    marker.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      removeHold(hold.id);
    });

    overlay.appendChild(marker);
  });

}

/**
 * Check if click is near an existing hold
 */
function findHoldAtPosition(x: number, y: number, tolerance: number = 2): Hold | null {
  if (!state.currentBoulder) return null;

  for (const hold of state.currentBoulder.holds) {
    const dx = Math.abs(hold.x - x);
    const dy = Math.abs(hold.y - y);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < tolerance) {
      return hold;
    }
  }

  return null;
}

/**
 * Add a hold at the clicked position, or remove if clicking on existing hold
 */
function addHold(event: MouseEvent, type: 'start' | 'feet-only' | 'middle' | 'top'): void {
  const img = document.querySelector('#spraywall-img') as HTMLImageElement;
  if (!img) return;

  // Get the click position relative to the actual image element
  const imgRect = img.getBoundingClientRect();
  const x = ((event.clientX - imgRect.left) / imgRect.width) * 100;
  const y = ((event.clientY - imgRect.top) / imgRect.height) * 100;

  // Check if clicking on an existing hold to remove it
  // Tolerance of 1% - about 1/3 of the circle radius for precise clicking
  const existingHold = findHoldAtPosition(x, y, 1);
  if (existingHold) {
    removeHold(existingHold.id);
    return;
  }

  // Ensure we have a current boulder
  if (!state.currentBoulder) {
    const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
    const name = nameInput.value.trim() || '';
    state.currentBoulder = createNewBoulder(name);
  }

  const hold: Hold = {
    id: generateId(),
    x: Math.max(0, Math.min(100, x)),
    y: Math.max(0, Math.min(100, y)),
    type,
  };

  state.currentBoulder.holds.push(hold);
  renderHolds();
}

/**
 * Remove a hold
 */
function removeHold(holdId: string): void {
  if (!state.currentBoulder) return;

  state.currentBoulder.holds = state.currentBoulder.holds.filter(h => h.id !== holdId);
  renderHolds();
}

// ============================================================================
// UI Mode Management
// ============================================================================

/**
 * Update mode UI
 */
function updateModeUI(): void {
  const setModeBtn = document.querySelector('#mode-set') as HTMLButtonElement;
  const climbModeBtn = document.querySelector('#mode-climb') as HTMLButtonElement;
  const setModeContent = document.querySelector('#set-mode-content') as HTMLElement;
  const climbModeContent = document.querySelector('#climb-mode-content') as HTMLElement;

  if (!setModeBtn || !climbModeBtn || !setModeContent || !climbModeContent) return;

  // disabled: utilities have to be on the className we set here, otherwise
  // they get clobbered by the rewrite below.
  const setModeDisabled = 'disabled:opacity-50 disabled:cursor-not-allowed';
  if (state.mode === 'set') {
    setModeBtn.className = `flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white ${setModeDisabled}`;
    climbModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white';
    setModeContent.style.display = 'block';
    climbModeContent.style.display = 'none';
  } else {
    setModeBtn.className = `flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white ${setModeDisabled}`;
    climbModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white';
    setModeContent.style.display = 'none';
    climbModeContent.style.display = 'block';
  }
}

/**
 * Switch mode
 */
function switchMode(mode: 'set' | 'climb'): void {
  // If switching to climb mode, clear any editing state
  if (mode === 'climb') {
    state.currentBoulder = null;
    state.selectedBoulderId = null;

    // Clear form fields
    const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
    const gradeInput = document.querySelector('#boulder-grade') as HTMLSelectElement;
    const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;
    if (nameInput) nameInput.value = '';
    if (gradeInput) gradeInput.value = '';
    if (descriptionInput) descriptionInput.value = '';

    // Reset hold type selection
    currentHoldType = null;
    updateHoldTypeButtons();

    renderHolds();
  }

  // If switching to set mode, clear selected boulder
  if (mode === 'set') {
    state.selectedBoulderId = null;
    renderHolds();
    renderBoulderList();
  }

  state.mode = mode;
  updateModeUI();
}

// ============================================================================
// Boulder Management
// ============================================================================

/**
 * Save the current boulder
 */
async function saveCurrentBoulder(): Promise<void> {
  if (!currentUser) {
    alert('Please login to save boulders.');
    return;
  }
  if (!isViewingLatest()) {
    alert(READ_ONLY_TOOLTIP);
    return;
  }

  if (!state.currentBoulder) {
    alert('No boulder to save. Add some holds first!');
    return;
  }

  if (state.currentBoulder.holds.length === 0) {
    alert('Add at least one hold before saving.');
    return;
  }

  const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
  const gradeInput = document.querySelector('#boulder-grade') as HTMLSelectElement;
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;

  const name = nameInput.value.trim();
  if (!name) {
    alert('Please enter a boulder name.');
    nameInput.focus();
    return;
  }
  if (name.length > NAME_MAX_LENGTH) {
    alert(`Name must be ${NAME_MAX_LENGTH} characters or fewer.`);
    nameInput.focus();
    return;
  }

  const grade = gradeInput.value.trim();
  if (!grade) {
    alert('Please enter a grade.');
    gradeInput.focus();
    return;
  }

  if (currentRating === null) {
    alert('Please select a star rating.');
    return;
  }

  const description = descriptionInput.value.trim();
  if (description.length > DESCRIPTION_MAX_LENGTH) {
    alert(`Description must be ${DESCRIPTION_MAX_LENGTH} characters or fewer.`);
    descriptionInput.focus();
    return;
  }

  state.currentBoulder.name = name;
  state.currentBoulder.grade = grade;
  state.currentBoulder.rating = currentRating;
  if (description) {
    state.currentBoulder.description = description;
  } else {
    delete state.currentBoulder.description;
  }
  if (currentTags.size > 0) {
    state.currentBoulder.tags = [...currentTags];
  } else {
    delete state.currentBoulder.tags;
  }
  state.currentBoulder.updatedAt = Date.now();

  if (!activeBoard) {
    alert('No board configured yet. Please reload or contact the admin.');
    return;
  }

  // Save to Firebase
  try {
    await saveBoulder(activeBoard.id, state.currentBoulder);

    // Clear current boulder
    state.currentBoulder = null;
    nameInput.value = '';
    gradeInput.value = '';
    descriptionInput.value = '';

    // Reset hold type selection
    currentHoldType = null;
    updateHoldTypeButtons();

    // Reset rating
    currentRating = null;
    updateRatingStars();

    // Reset tags
    currentTags.clear();
    updateTagButtons();

    renderHolds();
  } catch (error) {
    alert('Failed to save boulder. Please check your connection and try again.');
    console.error(error);
  }
}

/**
 * Clear current boulder
 */
function clearCurrentBoulder(): void {
  // Confirm if there's a boulder being edited
  if (state.currentBoulder && state.currentBoulder.holds.length > 0) {
    if (!confirm('Are you sure you want to clear this boulder? All unsaved changes will be lost.')) {
      return;
    }
  }

  state.currentBoulder = null;
  state.selectedBoulderId = null;
  const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
  const gradeInput = document.querySelector('#boulder-grade') as HTMLSelectElement;
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;
  if (nameInput) nameInput.value = '';
  if (gradeInput) gradeInput.value = '';
  if (descriptionInput) descriptionInput.value = '';

  // Reset hold type selection
  currentHoldType = null;
  updateHoldTypeButtons();

  // Reset rating
  currentRating = null;
  updateRatingStars();

  // Reset tags
  currentTags.clear();
  updateTagButtons();

  renderHolds();
  renderBoulderList();
}

/**
 * Render the list of saved boulders
 */
function renderBoulderList(): void {
  const listContainer = document.querySelector('#boulder-list') as HTMLElement;
  const countEl = document.querySelector('#boulder-count');

  if (!listContainer) return;

  if (countEl) {
    countEl.textContent = state.boulders.length.toString();
  }

  if (state.boulders.length === 0) {
    listContainer.innerHTML = '<p class="text-gray-500 text-sm">No boulders saved yet.</p>';
    return;
  }

  const readOnly = !isViewingLatest();
  listContainer.innerHTML = [...state.boulders]
    .sort((a, b) => {
      const gradeDiff = (b.grade ?? '').localeCompare(a.grade ?? '');
      const ratingDiff = (b.rating ?? 0) - (a.rating ?? 0);
      if (sortMode === 'grade') {
        if (gradeDiff !== 0) return gradeDiff;
        if (ratingDiff !== 0) return ratingDiff;
      } else {
        if (ratingDiff !== 0) return ratingDiff;
        if (gradeDiff !== 0) return gradeDiff;
      }
      return b.createdAt - a.createdAt;
    })
    .map((boulder) => {
      const isSelected = state.selectedBoulderId === boulder.id;
      const lockDisabled = readOnly;
      const editDisabled = readOnly || !!boulder.isLocked;
      const deleteDisabled = readOnly || !!boulder.isLocked;
      const lockTitle = readOnly ? READ_ONLY_TOOLTIP : boulder.isLocked ? 'Locked' : 'Unlocked';
      const editTitle = readOnly ? READ_ONLY_TOOLTIP : 'Edit boulder';
      const deleteTitle = readOnly ? READ_ONLY_TOOLTIP : 'Delete boulder';
      return `
        <div
          class="p-4 md:p-3 rounded ${isSelected ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600 active:bg-gray-600'} cursor-pointer"
          data-boulder-id="${boulder.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${boulder.name}</h3>
              ${boulder.grade || boulder.rating ? `
                <p class="text-sm md:text-sm text-gray-300 flex items-center gap-2">
                  ${boulder.grade ? `<span>${boulder.grade}</span>` : ''}
                  ${boulder.rating ? `<span><span class="text-amber-400">${'★'.repeat(boulder.rating)}</span><span class="text-gray-600">${'★'.repeat(3 - boulder.rating)}</span></span>` : ''}
                </p>
              ` : ''}
              ${boulder.description ? `<p class="text-xs md:text-xs text-gray-400 mt-1 italic whitespace-pre-wrap break-words">${boulder.description}</p>` : ''}
              ${boulder.tags && boulder.tags.length > 0 ? `
                <div class="flex flex-wrap gap-1 mt-1">
                  ${boulder.tags.map(t => `<span class="px-2 py-0.5 rounded bg-gray-500 text-gray-100 text-xs">${t}</span>`).join('')}
                </div>
              ` : ''}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${boulder.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="${boulder.isLocked ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-400 hover:text-gray-300'} active:text-gray-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-toggle-lock="${boulder.id}"
                title="${lockTitle}"
                ${lockDisabled ? 'disabled' : ''}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${boulder.isLocked
                    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />'
                    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />'
                  }
                </svg>
              </button>
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-edit-boulder="${boulder.id}"
                title="${editTitle}"
                ${editDisabled ? 'disabled' : ''}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-delete-boulder="${boulder.id}"
                title="${deleteTitle}"
                ${deleteDisabled ? 'disabled' : ''}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // Add click handlers
  listContainer.querySelectorAll('[data-boulder-id]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-delete-boulder]')) return; // Ignore if clicking delete button
      if (target.closest('[data-edit-boulder]')) return; // Ignore if clicking edit button
      if (target.closest('[data-toggle-lock]')) return; // Ignore if clicking lock button

      const boulderId = (el as HTMLElement).dataset.boulderId!;
      selectBoulder(boulderId);
    });
  });

  // Add lock toggle handlers
  listContainer.querySelectorAll('[data-toggle-lock]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const boulderId = (el as HTMLElement).dataset.toggleLock!;
      toggleBoulderLock(boulderId);
    });
  });

  // Add edit handlers
  listContainer.querySelectorAll('[data-edit-boulder]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const boulderId = (el as HTMLElement).dataset.editBoulder!;
      const boulder = state.boulders.find(b => b.id === boulderId);
      if (boulder?.isLocked) return; // Don't edit if locked
      editBoulder(boulderId);
    });
  });

  // Add delete handlers
  listContainer.querySelectorAll('[data-delete-boulder]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const boulderId = (el as HTMLElement).dataset.deleteBoulder!;
      const boulder = state.boulders.find(b => b.id === boulderId);
      if (boulder?.isLocked) return; // Don't delete if locked
      deleteBoulder(boulderId);
    });
  });
}

/**
 * Select a boulder to view
 */
function selectBoulder(boulderId: string): void {
  if (state.selectedBoulderId === boulderId) {
    // Deselect
    state.selectedBoulderId = null;
  } else {
    // Select
    state.selectedBoulderId = boulderId;
  }
  renderBoulderList();
  renderHolds();
}

/**
 * Toggle boulder lock status
 */
async function toggleBoulderLock(boulderId: string): Promise<void> {
  // Only admin can lock/unlock boulders
  if (!isAdmin()) {
    alert('Only the admin can lock/unlock boulders.');
    return;
  }
  if (!isViewingLatest()) {
    alert(READ_ONLY_TOOLTIP);
    return;
  }

  const boulder = state.boulders.find(b => b.id === boulderId);
  if (!boulder) return;

  if (!activeBoard) return;

  // If locking, no password needed
  if (!boulder.isLocked) {
    boulder.isLocked = true;
    try {
      await saveBoulder(activeBoard.id, boulder);
    } catch (error) {
      alert('Failed to lock boulder. Please check your connection.');
      console.error(error);
    }
    return;
  }

  // Unlock the boulder
  boulder.isLocked = false;
  try {
    await saveBoulder(activeBoard.id, boulder);
  } catch (error) {
    alert('Failed to unlock boulder. Please check your connection.');
    console.error(error);
  }
}

/**
 * Edit a boulder
 */
async function editBoulder(boulderId: string): Promise<void> {
  if (!currentUser) {
    alert('Please login to edit boulders.');
    return;
  }
  if (!isViewingLatest()) {
    alert(READ_ONLY_TOOLTIP);
    return;
  }

  const boulder = state.boulders.find(b => b.id === boulderId);
  if (!boulder) return;

  if (!confirm('Are you sure you want to edit this boulder?')) {
    return;
  }

  // Switch to set mode
  state.mode = 'set';
  updateModeUI();

  // Clear selected boulder so we can see editing changes in real-time
  state.selectedBoulderId = null;

  // Load boulder into current editing state
  state.currentBoulder = { ...boulder, holds: [...boulder.holds] }; // Deep copy

  // Fill form fields
  const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
  const gradeInput = document.querySelector('#boulder-grade') as HTMLSelectElement;
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;

  if (nameInput) nameInput.value = boulder.name;
  if (gradeInput) gradeInput.value = boulder.grade || '';
  if (descriptionInput) descriptionInput.value = boulder.description || '';

  // Restore rating
  currentRating = boulder.rating ?? null;
  updateRatingStars();

  // Restore tags
  currentTags = new Set(boulder.tags ?? []);
  updateTagButtons();

  // Render holds
  renderHolds();
}

/**
 * Delete a boulder
 */
async function deleteBoulder(boulderId: string): Promise<void> {
  if (!currentUser) {
    alert('Please login to delete boulders.');
    return;
  }
  if (!isViewingLatest()) {
    alert(READ_ONLY_TOOLTIP);
    return;
  }

  if (!confirm('Are you sure you want to delete this boulder?')) {
    return;
  }

  if (!activeBoard) return;

  // Delete from Firebase
  try {
    await deleteBoulderFromFirebase(activeBoard.id, boulderId);

    if (state.selectedBoulderId === boulderId) {
      state.selectedBoulderId = null;
      renderHolds();
    }
  } catch (error) {
    alert('Failed to delete boulder. Please check your connection and try again.');
    console.error(error);
  }
}

// ============================================================================
// Event Listeners
// ============================================================================

/**
 * Update hold type button visual states
 */
function updateHoldTypeButtons(): void {
  const startBtn = document.querySelector('#btn-start') as HTMLButtonElement;
  const feetOnlyBtn = document.querySelector('#btn-feet-only') as HTMLButtonElement;
  const middleBtn = document.querySelector('#btn-middle') as HTMLButtonElement;
  const topBtn = document.querySelector('#btn-top') as HTMLButtonElement;

  [startBtn, feetOnlyBtn, middleBtn, topBtn].forEach(btn => {
    btn?.classList.remove('ring-2', 'ring-white');
  });

  if (currentHoldType === 'start') startBtn?.classList.add('ring-2', 'ring-white');
  if (currentHoldType === 'feet-only') feetOnlyBtn?.classList.add('ring-2', 'ring-white');
  if (currentHoldType === 'middle') middleBtn?.classList.add('ring-2', 'ring-white');
  if (currentHoldType === 'top') topBtn?.classList.add('ring-2', 'ring-white');
}

/**
 * Update star rating button visual states
 */
function updateRatingStars(): void {
  document.querySelectorAll<HTMLButtonElement>('#boulder-rating [data-rating]').forEach(btn => {
    const n = Number(btn.dataset.rating) as 1 | 2 | 3;
    const filled = currentRating !== null && n <= currentRating;
    btn.classList.toggle('text-amber-400', filled);
    btn.classList.toggle('text-gray-500', !filled);
  });
}

/**
 * Update tag toggle button visual states
 */
function updateTagButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('#boulder-tags [data-tag]').forEach(btn => {
    const tag = btn.dataset.tag!;
    const active = currentTags.has(tag);
    btn.classList.toggle('bg-amber-400', active);
    btn.classList.toggle('text-gray-900', active);
    btn.classList.toggle('bg-gray-600', !active);
    btn.classList.toggle('text-gray-300', !active);
  });
}

/**
 * Update sort toggle button visual states
 */
function updateSortButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('#boulder-sort [data-sort]').forEach(btn => {
    const active = btn.dataset.sort === sortMode;
    btn.classList.toggle('bg-blue-600', active);
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('text-gray-300', !active);
  });
}

/**
 * Set up event listeners
 */
function setupEventListeners(): void {
  let panStartX = 0;
  let panStartY = 0;
  let hasPanned = false;

  // Login button
  document.querySelector('#login-btn')?.addEventListener('click', async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Failed to login. Please try again.');
    }
  });

  // Logout button
  document.querySelector('#logout-btn')?.addEventListener('click', async () => {
    if (confirm('Are you sure you want to logout?')) {
      await signOut(auth);
    }
  });

  // Mode switcher buttons
  document.querySelector('#mode-set')?.addEventListener('click', () => {
    switchMode('set');
  });

  document.querySelector('#mode-climb')?.addEventListener('click', () => {
    switchMode('climb');
  });

  // Hold type buttons
  document.querySelector('#btn-start')?.addEventListener('click', () => {
    currentHoldType = currentHoldType === 'start' ? null : 'start';
    updateHoldTypeButtons();
  });

  document.querySelector('#btn-feet-only')?.addEventListener('click', () => {
    currentHoldType = currentHoldType === 'feet-only' ? null : 'feet-only';
    updateHoldTypeButtons();
  });

  document.querySelector('#btn-middle')?.addEventListener('click', () => {
    currentHoldType = currentHoldType === 'middle' ? null : 'middle';
    updateHoldTypeButtons();
  });

  document.querySelector('#btn-top')?.addEventListener('click', () => {
    currentHoldType = currentHoldType === 'top' ? null : 'top';
    updateHoldTypeButtons();
  });

  // Rating star buttons (event delegation)
  document.querySelector('#boulder-rating')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-rating]') as HTMLElement | null;
    if (!btn) return;
    const n = Number(btn.dataset.rating) as 1 | 2 | 3;
    currentRating = currentRating === n ? null : n;
    updateRatingStars();
  });

  // Tag toggle buttons (event delegation)
  document.querySelector('#boulder-tags')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-tag]') as HTMLElement | null;
    if (!btn) return;
    const tag = btn.dataset.tag!;
    if (currentTags.has(tag)) currentTags.delete(tag); else currentTags.add(tag);
    updateTagButtons();
  });

  updateTagButtons();

  // Sort toggle (event delegation)
  document.querySelector('#boulder-sort')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-sort]') as HTMLElement | null;
    if (!btn) return;
    const mode = btn.dataset.sort as 'grade' | 'stars';
    if (mode === sortMode) return;
    sortMode = mode;
    updateSortButtons();
    renderBoulderList();
  });

  updateSortButtons();

  // Listen to panzoom events to detect actual panning
  const container = document.querySelector('#panzoom-container');

  container?.addEventListener('panzoomstart', () => {
    const panzoom = getPanzoomInstance();
    if (panzoom) {
      const pan = panzoom.getPan();
      panStartX = pan.x;
      panStartY = pan.y;
      hasPanned = false;
    }
  });

  container?.addEventListener('panzoomchange', () => {
    const panzoom = getPanzoomInstance();
    if (panzoom) {
      const pan = panzoom.getPan();
      // If pan position changed by more than 2 pixels, it's actual panning
      if (Math.abs(pan.x - panStartX) > 2 || Math.abs(pan.y - panStartY) > 2) {
        hasPanned = true;
      }
    }
  });

  container?.addEventListener('panzoomend', () => {
    // Reset after a short delay
    setTimeout(() => {
      hasPanned = false;
    }, 100);
  });

  // Click on image to add hold
  const img = document.querySelector('#spraywall-img');
  img?.addEventListener('click', (event) => {
    if (!currentHoldType) return;
    if (hasPanned) return;
    addHold(event as MouseEvent, currentHoldType);
  });

  // Save boulder button
  document.querySelector('#btn-save')?.addEventListener('click', saveCurrentBoulder);

  // Clear button
  document.querySelector('#btn-clear')?.addEventListener('click', clearCurrentBoulder);

  // Recalibrate button (admin only — element only rendered for admin)
  document.querySelector('#btn-recalibrate')?.addEventListener('click', () => {
    if (!isAdmin()) return;
    if (!activeBoard) {
      alert('Wait for the current board to load before recalibrating.');
      return;
    }
    if (!isViewingLatest()) {
      alert('Switch to the current board before recalibrating.');
      return;
    }
    openRecalibrationModal({
      currentBoard: activeBoard,
      currentBoulders: state.boulders,
    });
  });

  // Board selector (admin only — element only rendered for admin)
  document.querySelector('#board-version-select')?.addEventListener('change', (e) => {
    const id = (e.target as HTMLSelectElement).value;
    const board = allBoards.find((b) => b.id === id);
    if (board) applyActiveBoard(board);
  });
}

// ============================================================================
// Application Initialization
// ============================================================================

/**
 * Initialize the application
 */
async function init(): Promise<void> {
  // Set up auth state listener
  onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    // Always show app, regardless of login status
    await showApp();
  });
}

/**
 * Resubscribe to the active board's boulders subcollection. Tears down any
 * prior subscription first.
 */
function resubscribeBoulders(boardId: string): void {
  if (bouldersUnsub) {
    bouldersUnsub();
    bouldersUnsub = null;
  }
  bouldersUnsub = subscribeToBoulders(boardId, (boulders) => {
    state.boulders = boulders;
    renderBoulderList();
    if (state.selectedBoulderId) {
      renderHolds();
    }
  });
}

/**
 * Apply a new active board: swap the image src and resubscribe boulders.
 */
function applyActiveBoard(board: Board | null): void {
  activeBoard = board;
  const img = document.querySelector('#spraywall-img') as HTMLImageElement | null;
  if (img) {
    if (board) {
      img.src = board.imageUrl;
    } else {
      img.removeAttribute('src');
    }
  }
  const versionLabel = document.querySelector('#board-version-label');
  if (versionLabel) {
    versionLabel.textContent = board ? board.version : '—';
  }
  if (board) {
    resubscribeBoulders(board.id);
  } else {
    if (bouldersUnsub) {
      bouldersUnsub();
      bouldersUnsub = null;
    }
    state.boulders = [];
    renderBoulderList();
  }
  renderBoardSelector();
  applyReadOnlyState();
}

/**
 * Populate the admin-only board version dropdown with all known boards.
 * No-op for non-admin sessions (no element exists).
 */
function renderBoardSelector(): void {
  const sel = document.querySelector('#board-version-select') as HTMLSelectElement | null;
  if (!sel) return;
  sel.innerHTML = allBoards
    .map((b) => {
      const suffix = b.id === latestBoardId ? ' (current)' : ' (legacy)';
      const selected = b.id === activeBoard?.id ? 'selected' : '';
      return `<option value="${b.id}" ${selected}>${b.version}${suffix}</option>`;
    })
    .join('');
}

/**
 * Toggle the read-only UI for non-current boards: greys out Save, the
 * "Set boulders" tab, and per-boulder action icons; hides the recalibrate icon.
 */
function applyReadOnlyState(): void {
  const readOnly = !isViewingLatest();

  const recalBtn = document.querySelector('#btn-recalibrate') as HTMLElement | null;
  if (recalBtn) recalBtn.style.display = isAdmin() && !readOnly ? '' : 'none';

  const setModeBtn = document.querySelector('#mode-set') as HTMLButtonElement | null;
  if (setModeBtn) {
    setModeBtn.disabled = readOnly;
    setModeBtn.title = readOnly ? READ_ONLY_TOOLTIP : '';
  }
  if (readOnly && state.mode === 'set') {
    state.mode = 'climb';
    updateModeUI();
  }

  const saveBtn = document.querySelector('#btn-save') as HTMLButtonElement | null;
  if (saveBtn) {
    saveBtn.disabled = readOnly;
    saveBtn.title = readOnly ? READ_ONLY_TOOLTIP : '';
  }

  // Re-render boulder list so per-row lock/edit/delete pick up the new state.
  renderBoulderList();
}

/**
 * Show main app
 */
async function showApp(): Promise<void> {
  // Tear down any prior subscriptions before re-rendering UI
  if (boardUnsub) {
    boardUnsub();
    boardUnsub = null;
  }
  if (bouldersUnsub) {
    bouldersUnsub();
    bouldersUnsub = null;
  }

  // Render UI first (uses activeBoard for the image src)
  renderHTML();
  renderBoulderList();

  // Subscribe to ALL boards. Auto-switches the active view only on first load
  // and when a new board appears, so the admin's manual selection in the
  // dropdown isn't clobbered by routine snapshot ticks.
  boardUnsub = subscribeToAllBoards((boards, latest) => {
    allBoards = boards;
    const newLatestId = latest?.id ?? null;
    const isFirstLoad = latestBoardId === null;
    const latestChanged = newLatestId !== latestBoardId;
    // Non-admins (and signed-out users) can only ever view the latest board.
    // If they somehow land on a historical board (e.g. an admin logged out
    // while viewing one), snap them back to current.
    const mustForceLatest = !isAdmin() && activeBoard?.id !== newLatestId;
    latestBoardId = newLatestId;

    if (isFirstLoad || latestChanged || mustForceLatest) {
      applyActiveBoard(latest);
    } else {
      // Active board may have been edited externally — refresh in-memory copy.
      const refreshed = boards.find((b) => b.id === activeBoard?.id) ?? null;
      if (refreshed) activeBoard = refreshed;
      renderBoardSelector();
      applyReadOnlyState();
    }
  });

  // Initialize panzoom
  initializePanzoom();

  // Set up event listeners
  setupEventListeners();

  // Initialize mode UI
  updateModeUI();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
