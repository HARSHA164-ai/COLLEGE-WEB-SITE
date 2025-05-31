import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Load Users
async function loadUsers() {
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(usersRef);

  const facultyList = document.getElementById("facultyUsers");
  const studentList = document.getElementById("studentUsers");

  snapshot.forEach((docSnap) => {
    const user = docSnap.data();
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;

    if (user.role === "faculty") {
      facultyList.appendChild(li);
    } else if (user.role === "student") {
      studentList.appendChild(li);
    }
  });
}

loadUsers();
