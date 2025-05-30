// firebase.js

// Import the Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Define Firestore
const db = getFirestore(app);

// Export if needed
export { db, collection, addDoc };

import { db, collection, addDoc } from './firebase.js';

async function submitVideo() {
    const link = document.getElementById('videoLink').value;

    try {
        await addDoc(collection(db, 'videos'), {
            link: link
        });
        alert('Video link uploaded successfully!');
    } catch (error) {
        console.error('Error uploading video: ', error);
        alert('Error uploading video');
    }
}
