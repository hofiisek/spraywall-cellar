import type { Boulder, ExportData } from './types';

const STORAGE_KEY = 'spraywall-boulders';
const STORAGE_VERSION = '1.0.0';

/**
 * Save boulders to localStorage
 */
export function saveBoulders(boulders: Boulder[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boulders));
  } catch (error) {
    console.error('Failed to save boulders to localStorage:', error);
    throw new Error('Failed to save boulders. Storage might be full.');
  }
}

/**
 * Load boulders from localStorage
 */
export function loadBoulders(): Boulder[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }
    const boulders = JSON.parse(data);
    return Array.isArray(boulders) ? boulders : [];
  } catch (error) {
    console.error('Failed to load boulders from localStorage:', error);
    return [];
  }
}

/**
 * Export boulders as JSON file
 */
export function exportBoulders(boulders: Boulder[]): void {
  const exportData: ExportData = {
    version: STORAGE_VERSION,
    exportedAt: Date.now(),
    boulders,
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `spraywall-boulders-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

/**
 * Import boulders from JSON file
 */
export function importBoulders(file: File): Promise<Boulder[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string) as ExportData;

        // Validate the imported data
        if (!data.boulders || !Array.isArray(data.boulders)) {
          throw new Error('Invalid import file format');
        }

        resolve(data.boulders);
      } catch (error) {
        reject(new Error('Failed to parse import file'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
  });
}

/**
 * Clear all boulders from localStorage
 */
export function clearBoulders(): void {
  localStorage.removeItem(STORAGE_KEY);
}
