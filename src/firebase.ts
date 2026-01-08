/**
 * Firebase configuration and initialization
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy96lQqZuRueG_ZeABFzDJwqYuZZA4Fgw",
  authDomain: "the-spraywall-cellar.firebaseapp.com",
  projectId: "the-spraywall-cellar",
  storageBucket: "the-spraywall-cellar.firebasestorage.app",
  messagingSenderId: "491245667170",
  appId: "1:491245667170:web:5da5f8bcfc245c09b2a23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
