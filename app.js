// app.js
// Lógica de autenticación con Google usando Firebase (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("google-login");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuario autenticado:", user);
        // Guardar datos básicos en localStorage para persistencia simple
        localStorage.setItem("user", JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }));
        // Opcional: redirigir a la página de dashboard (a crear después)
        // window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Error en login:", error);
        alert("Error al iniciar sesión con Google. Revisa la consola para más detalles.");
      });
  });
}

// Detectar cambios de estado de autenticación y actualizar UI
function renderUser(user) {
  const body = document.body;
  body.innerHTML = `
    <div class="login-card">
      <h1>¡Bienvenido, ${user.displayName}!</h1>
      <img src="${user.photoURL}" alt="Avatar" style="border-radius:50%; width:80px; height:80px;" />
      <p>${user.email}</p>
      <button id="logout" class="login-btn" style="margin-top:1rem; background:#e74c3c;">Cerrar sesión</button>
    </div>
  `;
  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        location.reload();
      })
      .catch((err) => console.error("Error al cerrar sesión:", err));
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    renderUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  } else {
    // Si no está autenticado, dejar la UI original (el login button)
    // Si había información en localStorage, limpiarla
    localStorage.removeItem("user");
  }
});
