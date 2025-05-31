import { db } from './firebase.js';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-lite.js";

// 📦 Load users from Firestore
async function loadUsers() {
  const userTable = document.getElementById("userTable");
  const snapshot = await getDocs(collection(db, "users"));
  
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.email}</td>
      <td>${data.role}</td>
      <td><button onclick="deleteUser('${docSnap.id}')">Delete</button></td>
    `;
    userTable.appendChild(row);
  });
}

// ➕ Add new user (to Firestore)
window.addUser = async function() {
  const email = document.getElementById("newUserEmail").value.trim();
  const role = document.getElementById("newUserRole").value;

  if (email) {
    await addDoc(collection(db, "users"), { email, role });
    alert("User added!");
    location.reload();
  } else {
    alert("Please enter an email.");
  }
}

// ❌ Delete user from Firestore
window.deleteUser = async function(userId) {
  await deleteDoc(doc(db, "users", userId));
  alert("User deleted!");
  location.reload();
}

// 📹 Load videos from Firestore
async function loadVideos() {
  const videoTable = document.getElementById("videoTable");
  const snapshot = await getDocs(collection(db, "videos"));
  
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><a href="${data.link}" target="_blank">View</a></td>
      <td>${data.name}</td>
      <td><button onclick="deleteVideo('${docSnap.id}')">Delete</button></td>
    `;
    videoTable.appendChild(row);
  });
}

// ❌ Delete video from Firestore
window.deleteVideo = async function(videoId) {
  await deleteDoc(doc(db, "videos", videoId));
  alert("Video deleted!");
  location.reload();
}

// Load everything on start
loadUsers();
loadVideos();
