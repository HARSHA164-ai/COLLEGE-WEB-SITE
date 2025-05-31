
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_wWNnD_1pvZuahffwDa8hCDje2Aru3B8",
    authDomain: "harshacollegewebsite.firebaseapp.com",
    projectId: "harshacollegewebsite",
    storageBucket: "harshacollegewebsite.firebasestorage.app",
    messagingSenderId: "568331032925",
    appId: "1:568331032925:web:725cf04c75452c06ed70b4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
