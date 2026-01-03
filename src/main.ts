import './styles/main.css';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import type { AppState, Boulder, Hold } from './types';
import { loadBoulders, saveBoulders, exportBoulders, importBoulders } from './storage';

// Application state
let state: AppState = {
  boulders: [],
  currentBoulder: null,
  selectedBoulderId: null,
};

let panzoomInstance: PanzoomObject | null = null;

/**
 * Generate a unique ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new boulder
 */
function createNewBoulder(name: string, grade?: string): Boulder {
  const now = Date.now();
  return {
    id: generateId(),
    name,
    grade,
    holds: [],
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Render the HTML structure
 */
function renderHTML(): void {
  const app = document.querySelector('#app')!;
  app.innerHTML = `
    <div class="flex h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto">
        <h1 class="text-2xl font-bold mb-6">Spraywall Tracker</h1>

        <!-- Current Boulder Form -->
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <h2 class="text-lg font-semibold mb-3">Create Boulder</h2>
          <input
            type="text"
            id="boulder-name"
            placeholder="Boulder name"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            id="boulder-grade"
            placeholder="Grade (optional)"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-2 bg-green-600 hover:bg-green-700 rounded font-medium">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 rounded font-medium">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded font-medium">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-2 bg-red-600 hover:bg-red-700 rounded font-medium">
              Top
            </button>
          </div>
          <div id="current-holds-info" class="text-sm text-gray-300 mb-3">
            Holds: <span id="holds-count">0</span>
          </div>
          <div class="flex gap-2">
            <button id="btn-save" class="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-medium">
              Save Boulder
            </button>
            <button id="btn-clear" class="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded font-medium">
              Clear
            </button>
          </div>
        </div>

        <!-- Boulder List -->
        <div class="flex-1 overflow-y-auto">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">Saved Boulders</h2>
            <span class="text-sm text-gray-400" id="boulder-count">0</span>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Export/Import -->
        <div class="mt-6 pt-4 border-t border-gray-700">
          <div class="flex gap-2">
            <button id="btn-export" class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-medium">
              Export JSON
            </button>
            <label class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-medium text-center cursor-pointer">
              Import JSON
              <input type="file" id="input-import" accept=".json" class="hidden" />
            </label>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Instructions -->
        <div class="bg-gray-800 px-6 py-3 text-sm text-gray-300">
          <span class="font-medium">Instructions:</span>
          Select hold type, then click on the wall to add holds. Use mouse wheel to zoom, drag to pan.
        </div>

        <!-- Spraywall Image Container -->
        <div class="flex-1 overflow-hidden bg-gray-950 relative">
          <div id="panzoom-container" class="spraywall-container h-full w-full">
            <div style="position: relative; display: inline-block;">
              <img
                src="/spraywall.jpg"
                alt="Spraywall"
                class="spraywall-image"
                id="spraywall-img"
              />
              <div id="holds-overlay" class="absolute top-0 left-0 pointer-events-none" style="width: 100%; height: 100%;">
                <!-- Hold markers will be inserted here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize panzoom on the spraywall image
 */
function initializePanzoom(): void {
  const container = document.querySelector('#panzoom-container') as HTMLElement;
  if (!container) return;

  panzoomInstance = Panzoom(container, {
    maxScale: 5,
    minScale: 0.5,
    cursor: 'grab',
    canvas: true,
  });

  // Enable zooming with mouse wheel
  const parent = container.parentElement!;
  parent.addEventListener('wheel', (event) => {
    if (!panzoomInstance) return;
    panzoomInstance.zoomWithWheel(event);
  });
}

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

  updateHoldsCount();
}

/**
 * Add a hold at the clicked position
 */
function addHold(event: MouseEvent, type: 'start' | 'feet-only' | 'middle' | 'top'): void {
  const img = document.querySelector('#spraywall-img') as HTMLImageElement;
  if (!img) return;

  // Get the click position relative to the actual image element
  const imgRect = img.getBoundingClientRect();
  const x = ((event.clientX - imgRect.left) / imgRect.width) * 100;
  const y = ((event.clientY - imgRect.top) / imgRect.height) * 100;

  // Ensure we have a current boulder
  if (!state.currentBoulder) {
    const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
    const name = nameInput.value.trim() || `Boulder ${state.boulders.length + 1}`;
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

/**
 * Update holds count display
 */
function updateHoldsCount(): void {
  const count = state.currentBoulder?.holds.length || 0;
  const countEl = document.querySelector('#holds-count');
  if (countEl) {
    countEl.textContent = count.toString();
  }
}

/**
 * Save the current boulder
 */
function saveCurrentBoulder(): void {
  if (!state.currentBoulder) {
    alert('No boulder to save. Add some holds first!');
    return;
  }

  if (state.currentBoulder.holds.length === 0) {
    alert('Add at least one hold before saving.');
    return;
  }

  const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
  const gradeInput = document.querySelector('#boulder-grade') as HTMLInputElement;

  const name = nameInput.value.trim() || `Boulder ${state.boulders.length + 1}`;
  const grade = gradeInput.value.trim() || undefined;

  state.currentBoulder.name = name;
  state.currentBoulder.grade = grade;
  state.currentBoulder.updatedAt = Date.now();

  state.boulders.push(state.currentBoulder);
  saveBoulders(state.boulders);

  // Clear current boulder
  state.currentBoulder = null;
  nameInput.value = '';
  gradeInput.value = '';

  renderBoulderList();
  renderHolds();
}

/**
 * Clear current boulder
 */
function clearCurrentBoulder(): void {
  state.currentBoulder = null;
  state.selectedBoulderId = null;
  const nameInput = document.querySelector('#boulder-name') as HTMLInputElement;
  const gradeInput = document.querySelector('#boulder-grade') as HTMLInputElement;
  if (nameInput) nameInput.value = '';
  if (gradeInput) gradeInput.value = '';
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

  listContainer.innerHTML = state.boulders
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((boulder) => {
      const isSelected = state.selectedBoulderId === boulder.id;
      return `
        <div
          class="p-3 rounded ${isSelected ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} cursor-pointer"
          data-boulder-id="${boulder.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium">${boulder.name}</h3>
              ${boulder.grade ? `<p class="text-sm text-gray-300">${boulder.grade}</p>` : ''}
              <p class="text-xs text-gray-400 mt-1">${boulder.holds.length} holds</p>
            </div>
            <button
              class="text-red-400 hover:text-red-300 ml-2"
              data-delete-boulder="${boulder.id}"
              title="Delete boulder"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
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

      const boulderId = (el as HTMLElement).dataset.boulderId!;
      selectBoulder(boulderId);
    });
  });

  // Add delete handlers
  listContainer.querySelectorAll('[data-delete-boulder]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const boulderId = (el as HTMLElement).dataset.deleteBoulder!;
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
 * Delete a boulder
 */
function deleteBoulder(boulderId: string): void {
  if (!confirm('Are you sure you want to delete this boulder?')) {
    return;
  }

  state.boulders = state.boulders.filter(b => b.id !== boulderId);
  if (state.selectedBoulderId === boulderId) {
    state.selectedBoulderId = null;
  }
  saveBoulders(state.boulders);
  renderBoulderList();
  renderHolds();
}

/**
 * Set up event listeners
 */
function setupEventListeners(): void {
  let currentHoldType: 'start' | 'feet-only' | 'middle' | 'top' | null = null;

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

  // Click on image to add hold
  const img = document.querySelector('#spraywall-img');
  img?.addEventListener('click', (event) => {
    if (currentHoldType) {
      addHold(event as MouseEvent, currentHoldType);
    }
  });

  // Save boulder button
  document.querySelector('#btn-save')?.addEventListener('click', saveCurrentBoulder);

  // Clear button
  document.querySelector('#btn-clear')?.addEventListener('click', clearCurrentBoulder);

  // Export button
  document.querySelector('#btn-export')?.addEventListener('click', () => {
    if (state.boulders.length === 0) {
      alert('No boulders to export.');
      return;
    }
    exportBoulders(state.boulders);
  });

  // Import button
  const importInput = document.querySelector('#input-import') as HTMLInputElement;
  importInput?.addEventListener('change', async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    try {
      const importedBoulders = await importBoulders(file);

      if (confirm(`Import ${importedBoulders.length} boulders? This will replace your current data.`)) {
        state.boulders = importedBoulders;
        saveBoulders(state.boulders);
        renderBoulderList();
        alert('Boulders imported successfully!');
      }
    } catch (error) {
      alert('Failed to import boulders. Please check the file format.');
      console.error(error);
    }

    // Reset input
    importInput.value = '';
  });
}

/**
 * Initialize the application
 */
function init(): void {
  // Load saved boulders
  state.boulders = loadBoulders();

  // Render UI
  renderHTML();
  renderBoulderList();

  // Initialize panzoom
  initializePanzoom();

  // Set up event listeners
  setupEventListeners();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
