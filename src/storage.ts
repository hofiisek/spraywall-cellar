import type { Boulder, ExportData } from './types';
import { db } from './firebase';
import { collection, getDocs, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const STORAGE_VERSION = '1.0.0';
const BOULDERS_COLLECTION = 'boulders';

/**
 * Save a single boulder to Firebase
 */
export async function saveBoulder(boulder: Boulder): Promise<void> {
  try {
    await setDoc(doc(db, BOULDERS_COLLECTION, boulder.id), boulder);
  } catch (error) {
    console.error('Failed to save boulder to Firebase:', error);
    throw new Error('Failed to save boulder. Check your connection.');
  }
}

/**
 * Save multiple boulders to Firebase
 */
export async function saveBoulders(boulders: Boulder[]): Promise<void> {
  try {
    const promises = boulders.map(boulder =>
      setDoc(doc(db, BOULDERS_COLLECTION, boulder.id), boulder)
    );
    await Promise.all(promises);
  } catch (error) {
    console.error('Failed to save boulders to Firebase:', error);
    throw new Error('Failed to save boulders. Check your connection.');
  }
}

/**
 * Load all boulders from Firebase
 */
export async function loadBoulders(): Promise<Boulder[]> {
  try {
    const querySnapshot = await getDocs(collection(db, BOULDERS_COLLECTION));
    const boulders: Boulder[] = [];
    querySnapshot.forEach((doc) => {
      boulders.push(doc.data() as Boulder);
    });
    return boulders;
  } catch (error) {
    console.error('Failed to load boulders from Firebase:', error);
    return [];
  }
}

/**
 * Subscribe to real-time boulder updates
 */
export function subscribeToBoulders(callback: (boulders: Boulder[]) => void): () => void {
  const unsubscribe = onSnapshot(collection(db, BOULDERS_COLLECTION), (snapshot) => {
    const boulders: Boulder[] = [];
    snapshot.forEach((doc) => {
      boulders.push(doc.data() as Boulder);
    });
    callback(boulders);
  }, (error) => {
    console.error('Error subscribing to boulders:', error);
  });

  return unsubscribe;
}

/**
 * Delete a boulder from Firebase
 */
export async function deleteBoulderFromFirebase(boulderId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, BOULDERS_COLLECTION, boulderId));
  } catch (error) {
    console.error('Failed to delete boulder from Firebase:', error);
    throw new Error('Failed to delete boulder. Check your connection.');
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
 * Clear all boulders from Firebase
 */
export async function clearBoulders(): Promise<void> {
  try {
    const querySnapshot = await getDocs(collection(db, BOULDERS_COLLECTION));
    const promises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(promises);
  } catch (error) {
    console.error('Failed to clear boulders from Firebase:', error);
    throw new Error('Failed to clear boulders. Check your connection.');
  }
}
