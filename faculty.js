import { db, collection, addDoc } from './firebase.js';

document.getElementById("submitBtn").addEventListener("click", async function submitVideo() {
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
});
