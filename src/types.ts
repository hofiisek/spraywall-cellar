/**
 * Represents a single hold on the spraywall
 */
export interface Hold {
  /** Unique identifier for the hold */
  id: string;
  /** X coordinate as a percentage of image width (0-100) */
  x: number;
  /** Y coordinate as a percentage of image height (0-100) */
  y: number;
  /** Type of hold in the boulder sequence */
  type: 'start' | 'feet-only' | 'middle' | 'top';
}

/**
 * Represents a complete boulder problem
 */
export interface Boulder {
  /** Unique identifier for the boulder */
  id: string;
  /** Name of the boulder problem */
  name: string;
  /** Difficulty grade (optional) */
  grade?: string;
  /** Description of the boulder (optional) */
  description?: string;
  /** Array of holds that make up the boulder */
  holds: Hold[];
  /** Creation timestamp */
  createdAt: number;
  /** Last modified timestamp */
  updatedAt: number;
  /** Whether this boulder is locked (only master can edit/delete) */
  isLocked?: boolean;
}

/**
 * Application state
 */
export interface AppState {
  /** All saved boulders */
  boulders: Boulder[];
  /** Currently active boulder being created/edited */
  currentBoulder: Boulder | null;
  /** ID of the selected boulder for viewing */
  selectedBoulderId: string | null;
  /** Current app mode */
  mode: 'set' | 'climb';
}

/**
 * Data structure for export/import
 */
export interface ExportData {
  version: string;
  exportedAt: number;
  boulders: Boulder[];
}
