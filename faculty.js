import { db } from './firebase.js';  // make sure this path is correct
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

window.onload = function () {
  const submitBtn = document.getElementById("submitBtn");
  const videoInput = document.getElementById("videoLink");

  submitBtn.addEventListener("click", async function () {
    const link = videoInput.value;

    try {
      await addDoc(collection(db, "videos"), {
        link: link
      });
      alert("Video uploaded!");
    } catch (err) {
      console.error("Error:", err);
    }
  });
};
