// firebase.js

// Import the Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB_wWNnD_1pvZuahffwDa8hCDje2Aru3B8",
  authDomain: "harshacollegewebsite.firebaseapp.com",
  projectId: "harshacollegewebsite",
  storageBucket: "harshacollegewebsite.firebasestorage.app",
  messagingSenderId: "568331032925",
  appId: "1:568331032925:web:725cf04c75452c06ed70b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Define Firestore
const db = getFirestore(app);

// Export if needed
export { db, collection, addDoc };

