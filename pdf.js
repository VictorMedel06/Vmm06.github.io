// Función para cambiar a la versión en inglés
function switchToEnglish() {
  window.location.href = "./english/index.html"; // Ruta relativa correcta
}

// Función para regresar a la versión en español
function switchToSpanish() {
  window.location.href = "./index.html"; // Ruta relativa correcta
}

// Crear un botón para cambiar a la versión en inglés
const languageButtonToEnglish = document.createElement('button');
languageButtonToEnglish.textContent = 'Cambiar a Inglés';
languageButtonToEnglish.style.position = 'fixed';
languageButtonToEnglish.style.top = '10px';
languageButtonToEnglish.style.left = '10px';
languageButtonToEnglish.style.padding = '10px 15px';
languageButtonToEnglish.style.backgroundColor = '#28A745';
languageButtonToEnglish.style.color = 'white';
languageButtonToEnglish.style.border = 'none';
languageButtonToEnglish.style.borderRadius = '5px';
languageButtonToEnglish.style.cursor = 'pointer';
languageButtonToEnglish.style.zIndex = '1000';
document.body.appendChild(languageButtonToEnglish);

// Crear un botón para regresar a la versión en español
const languageButtonToSpanish = document.createElement('button');
languageButtonToSpanish.textContent = 'Cambiar a Español';
languageButtonToSpanish.style.position = 'fixed';
languageButtonToSpanish.style.top = '50px';
languageButtonToSpanish.style.left = '10px';
languageButtonToSpanish.style.padding = '10px 15px';
languageButtonToSpanish.style.backgroundColor = '#FF0000';
languageButtonToSpanish.style.color = 'white';
languageButtonToSpanish.style.border = 'none';
languageButtonToSpanish.style.borderRadius = '5px';
languageButtonToSpanish.style.cursor = 'pointer';
languageButtonToSpanish.style.zIndex = '1000';
document.body.appendChild(languageButtonToSpanish);

// Vincular los botones con sus funciones
languageButtonToEnglish.addEventListener('click', switchToEnglish);
languageButtonToSpanish.addEventListener('click', switchToSpanish);

// Vincular los botones con sus funciones
languageButtonToEnglish.addEventListener('click', switchToEnglish);
languageButtonToSpanish.addEventListener('click', switchToSpanish);
