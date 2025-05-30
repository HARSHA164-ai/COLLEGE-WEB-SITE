<script>
    const auth = firebase.auth();
    const db = firebase.firestore();

    function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;

    // Save role to Firestore
    return db.collection("users").doc(user.uid).set({
        email: email,
    role: role
        });
      })
      .then(() => {
        document.getElementById("msg").innerText = "Signup successful!";
      })
      .catch(error => {
        document.getElementById("msg").innerText = error.message;
      });
  }

    function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;

        // Get the role from Firestore
        db.collection("users").doc(user.uid).get().then(doc => {
          if (doc.exists) {
            const role = doc.data().role;
    if (role === "faculty") {
        window.location.href = "faculty.html";
            } else {
        window.location.href = "student.html";
            }
          } else {
        document.getElementById("msg").innerText = "No role found.";
          }
        });
      })
      .catch(error => {
        document.getElementById("msg").innerText = error.message;
      });
  }
</script>
