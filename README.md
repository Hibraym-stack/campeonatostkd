# Taekwondo Championship Login Portal

## Descripción
Este proyecto contiene una página de inicio de sesión basada en **Google Sign‑In** mediante **Firebase Authentication**. Está pensado como punto de partida para el sistema experto de gestión de campeonatos de taekwondo.

## Estructura de carpetas
```
login_portal/
├─ index.html          # Página principal con botón de login
├─ styles.css          # Estilos premium (dark theme, inspirado en el prototipo Figma)
├─ app.js              # Lógica de autenticación con Firebase (CDN)
├─ firebase-config.js  # Configuración del proyecto Firebase (deberás rellenar los valores)
└─ README.md           # Este archivo
```

## Paso a paso para ponerlo en marcha
1. **Configura Firebase**
   - En la consola de Firebase, crea un proyecto (o usa el que ya tienes).
   - Habilita el método de autenticación **Google** (Authentication → Sign‑in method).
   - Obtén los datos de configuración (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) y reemplaza los placeholders en `firebase-config.js`.
2. **Instala dependencias (opcional)**
   - Si prefieres usar npm y un bundler, ejecuta:
     ```bash
     cd D:/CODigos/antigravity/login_portal
     npm init -y
     npm install firebase
     ```
   - En este caso, los archivos ya usan los CDN de Firebase, por lo que no es obligatorio.
3. **Ejecuta localmente**
   - Puedes abrir `index.html` directamente en el navegador o servirlo con un servidor estático simple:
     ```bash
     npx serve .
     ```
   - Visita `http://localhost:5000` (o el puerto que indique) y pulsa **Iniciar sesión con Google**.
4. **Despliegue**
   - **Firebase Hosting** (recomendado):
     ```bash
     firebase login
     firebase init hosting   # Selecciona la carpeta "login_portal"
     firebase deploy
     ```
   - O despliega en cualquier otro host estático (Netlify, Vercel, GitHub Pages, etc.).
5. **Personalización del diseño**
   - El estilo actual está inspirado en el prototipo de Figma que compartiste. Si tienes colores, tipografías o imágenes específicas, reemplaza los valores en `styles.css`.
   - Puedes añadir tu logo en la tarjeta de login inseriendo una etiqueta `<img>` dentro de `.login-card`.

## Próximos pasos del sistema experto
- Añadir una página de **dashboard** donde se gestionen torneos, inscripciones y brackets.
- Integrar **Firestore** para almacenar datos de campeonatos, usuarios y resultados.
- Implementar roles (admin, árbitro, competidor) y controles de acceso.
- Conectar con el resto de la aplicación (p.ej., API para cálculo de emparejamientos).

---
**¡Listo!** Reemplaza los valores de `firebase-config.js`, abre `index.html` y verifica que el flujo de autenticación funciona.
