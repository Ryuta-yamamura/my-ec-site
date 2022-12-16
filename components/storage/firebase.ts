
// Import the functions you need from the SDKs you need
import { getApp, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseStorage, getStorage } from 'firebase/storage';

// Initialize Firebase
import '../firebase/init'

let analytics: Analytics; 
let firestore: Firestore;
let storage: FirebaseStorage;
const app: FirebaseApp = getApp()
  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    storage = getStorage(app);
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore();


export {app, analytics, firestore, storage};
