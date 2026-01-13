/**
 * The Spraywall Cellar
 * A spraywall boulder tracking application
 */

import './styles/main.css';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import type { AppState, Boulder, Hold } from './types';
import { loadBoulders, saveBoulder, exportBoulders, subscribeToBoulders, deleteBoulderFromFirebase } from './storage';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';

// ============================================================================
// Configuration
// ============================================================================
// SHA-256 hash of the delete password
const DELETE_PASSWORD_HASH = '59a6cabc8b017562ccb1f3c9514870b4a677fda5b79788abae3dcea83430cb50';

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

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate a unique ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Hash a string using SHA-256
 */
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify password against stored hash
 */
async function verifyPassword(password: string): Promise<boolean> {
  const hash = await sha256(password);
  return hash === DELETE_PASSWORD_HASH;
}

/**
 * Show a password input dialog
 */
function showPasswordDialog(message: string): Promise<string | null> {
  return new Promise((resolve) => {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;

    // Create dialog
    const dialog = document.createElement('div');
    dialog.style.cssText = `
      background: #1f2937;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      max-width: 400px;
      width: 90%;
    `;

    dialog.innerHTML = `
      <h3 style="color: white; margin: 0 0 16px 0; font-size: 18px;">${message}</h3>
      <input
        type="password"
        id="password-input"
        placeholder="Enter password"
        style="
          width: 100%;
          padding: 8px 12px;
          background: #374151;
          border: 1px solid #4b5563;
          border-radius: 4px;
          color: white;
          font-size: 14px;
          margin-bottom: 16px;
          box-sizing: border-box;
        "
      />
      <div style="display: flex; gap: 8px; justify-content: flex-end;">
        <button
          id="cancel-btn"
          style="
            padding: 8px 16px;
            background: #4b5563;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          "
        >Cancel</button>
        <button
          id="ok-btn"
          style="
            padding: 8px 16px;
            background: #7c3aed;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          "
        >OK</button>
      </div>
    `;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const input = dialog.querySelector('#password-input') as HTMLInputElement;
    const okBtn = dialog.querySelector('#ok-btn') as HTMLButtonElement;
    const cancelBtn = dialog.querySelector('#cancel-btn') as HTMLButtonElement;

    // Focus input
    setTimeout(() => input.focus(), 100);

    // Handle OK
    const handleOk = () => {
      const password = input.value;
      document.body.removeChild(overlay);
      resolve(password || null);
    };

    // Handle Cancel
    const handleCancel = () => {
      document.body.removeChild(overlay);
      resolve(null);
    };

    okBtn.addEventListener('click', handleOk);
    cancelBtn.addEventListener('click', handleCancel);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleOk();
      } else if (e.key === 'Escape') {
        handleCancel();
      }
    });
  });
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
        ${currentUser ? `<p class="text-xs text-gray-500 mb-3">Logged in as: ${currentUser.email}</p>` : `<p class="text-xs text-yellow-500 mb-3">⚠️ Login to edit/delete boulders</p>`}

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Set boulders
          </button>
          <button id="mode-climb" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Send it!!
          </button>
        </div>

        <!-- Current Boulder Form -->
        <div id="set-mode-content">
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <input
            type="text"
            id="boulder-name"
            placeholder="Boulder name"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            id="boulder-grade"
            placeholder="Grade"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            id="boulder-description"
            placeholder="Description (optional)"
            rows="2"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          ></textarea>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-3 md:py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded font-medium text-sm md:text-base">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-3 md:py-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded font-medium text-sm md:text-base">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded font-medium text-sm md:text-base">
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
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-semibold">Your boulders</h2>
            <div class="flex items-center gap-2">
              ${currentUser ? `
              <button id="btn-export" class="text-indigo-400 hover:text-indigo-300 p-1" title="Export JSON">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              ` : ''}
              <span class="text-sm text-gray-400" id="boulder-count">0</span>
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
                src="./spraywall.jpg"
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
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate scale to fit and fill the frame
    const scaleX = frameWidth / imgWidth;
    const scaleY = frameHeight / imgHeight;
    const fitScale = Math.min(scaleX, scaleY); // Fits entirely in frame
    const fillScale = Math.max(scaleX, scaleY); // Fills frame completely

    const startScale = fillScale * 3; // Start at 3x fill scale to make image bigger

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

  if (img.complete) {
    initPanzoom();
  } else {
    img.addEventListener('load', initPanzoom);
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

  if (state.mode === 'set') {
    setModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white';
    climbModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white';
    setModeContent.style.display = 'block';
    climbModeContent.style.display = 'none';
  } else {
    setModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white';
    climbModeBtn.className = 'flex-1 px-3 py-2 rounded font-medium transition-colors bg-purple-600 text-white';
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
    const gradeInput = document.querySelector('#boulder-grade') as HTMLInputElement;
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
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;

  const name = nameInput.value.trim();
  if (!name) {
    alert('Please enter a boulder name.');
    nameInput.focus();
    return;
  }

  const grade = gradeInput.value.trim();
  if (!grade) {
    alert('Please enter a grade.');
    gradeInput.focus();
    return;
  }

  const description = descriptionInput.value.trim();

  state.currentBoulder.name = name;
  state.currentBoulder.grade = grade;
  if (description) {
    state.currentBoulder.description = description;
  } else {
    delete state.currentBoulder.description;
  }
  state.currentBoulder.updatedAt = Date.now();

  // Save to Firebase
  try {
    await saveBoulder(state.currentBoulder);

    // Clear current boulder
    state.currentBoulder = null;
    nameInput.value = '';
    gradeInput.value = '';
    descriptionInput.value = '';

    // Reset hold type selection
    currentHoldType = null;
    updateHoldTypeButtons();

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
  const gradeInput = document.querySelector('#boulder-grade') as HTMLInputElement;
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;
  if (nameInput) nameInput.value = '';
  if (gradeInput) gradeInput.value = '';
  if (descriptionInput) descriptionInput.value = '';

  // Reset hold type selection
  currentHoldType = null;
  updateHoldTypeButtons();

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
          class="p-4 md:p-3 rounded ${isSelected ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600 active:bg-gray-600'} cursor-pointer"
          data-boulder-id="${boulder.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${boulder.name}</h3>
              ${boulder.grade ? `<p class="text-sm md:text-sm text-gray-300">${boulder.grade}</p>` : ''}
              ${boulder.description ? `<p class="text-xs md:text-xs text-gray-400 mt-1 italic">${boulder.description}</p>` : ''}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${boulder.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="${boulder.isLocked ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-400 hover:text-gray-300'} active:text-gray-200 p-2 -m-2"
                data-toggle-lock="${boulder.id}"
                title="${boulder.isLocked ? 'Locked' : 'Unlocked'}"
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${boulder.isLocked
                    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />'
                    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />'
                  }
                </svg>
              </button>
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2 ${boulder.isLocked ? 'opacity-50' : ''}"
                data-edit-boulder="${boulder.id}"
                title="Edit boulder"
                ${boulder.isLocked ? 'disabled' : ''}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2 ${boulder.isLocked ? 'opacity-50' : ''}"
                data-delete-boulder="${boulder.id}"
                title="Delete boulder"
                ${boulder.isLocked ? 'disabled' : ''}
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
  if (currentUser?.email !== 'hofiisek@gmail.com') {
    alert('Only the admin can lock/unlock boulders.');
    return;
  }

  const boulder = state.boulders.find(b => b.id === boulderId);
  if (!boulder) return;

  // If locking, no password needed
  if (!boulder.isLocked) {
    boulder.isLocked = true;
    try {
      await saveBoulder(boulder);
    } catch (error) {
      alert('Failed to lock boulder. Please check your connection.');
      console.error(error);
    }
    return;
  }

  // Unlock the boulder
  boulder.isLocked = false;
  try {
    await saveBoulder(boulder);
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

  const boulder = state.boulders.find(b => b.id === boulderId);
  if (!boulder) return;

  // Require password to edit
  const password = await showPasswordDialog('Enter password to edit this boulder:');
  if (!password) {
    return; // User cancelled
  }

  const isValid = await verifyPassword(password);
  if (!isValid) {
    alert('Incorrect password. Boulder not loaded for editing.');
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
  const gradeInput = document.querySelector('#boulder-grade') as HTMLInputElement;
  const descriptionInput = document.querySelector('#boulder-description') as HTMLTextAreaElement;

  if (nameInput) nameInput.value = boulder.name;
  if (gradeInput) gradeInput.value = boulder.grade || '';
  if (descriptionInput) descriptionInput.value = boulder.description || '';

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

  const password = await showPasswordDialog('Enter password to delete this boulder:');
  if (!password) {
    return; // User cancelled
  }

  const isValid = await verifyPassword(password);
  if (!isValid) {
    alert('Incorrect password. Boulder not deleted.');
    return;
  }

  if (!confirm('Are you sure you want to delete this boulder?')) {
    return;
  }

  // Delete from Firebase
  try {
    await deleteBoulderFromFirebase(boulderId);

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

  // Export button
  document.querySelector('#btn-export')?.addEventListener('click', () => {
    if (state.boulders.length === 0) {
      alert('No boulders to export.');
      return;
    }
    exportBoulders(state.boulders);
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
 * Show main app
 */
async function showApp(): Promise<void> {
  // Render UI first
  renderHTML();

  // Load saved boulders from Firebase
  state.boulders = await loadBoulders();
  renderBoulderList();

  // Subscribe to real-time updates
  subscribeToBoulders((boulders) => {
    state.boulders = boulders;
    renderBoulderList();
    // Re-render holds if viewing a boulder that got updated
    if (state.selectedBoulderId) {
      renderHolds();
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
