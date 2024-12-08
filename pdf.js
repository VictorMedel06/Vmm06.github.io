// Asegúrate de incluir la biblioteca html2pdf.js en tu proyecto.
// Puedes añadirla con un enlace CDN si no lo has hecho en el HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>

// Función para descargar la página como PDF
function downloadPageAsPDF() {
  const element = document.body; // Seleccionar todo el contenido de la página
  const options = {
    margin: 1,
    filename: 'pagina-web.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(options).from(element).save();
}

// Crear un botón de descarga PDF
const downloadButton = document.createElement('button');
downloadButton.textContent = 'Descargar como PDF';
downloadButton.style.position = 'fixed';
downloadButton.style.top = '10px';
downloadButton.style.right = '10px';
downloadButton.style.padding = '10px 15px';
downloadButton.style.backgroundColor = '#007BFF';
downloadButton.style.color = 'white';
downloadButton.style.border = 'none';
downloadButton.style.borderRadius = '5px';
downloadButton.style.cursor = 'pointer';
downloadButton.style.zIndex = '1000';
document.body.appendChild(downloadButton);

downloadButton.addEventListener('click', downloadPageAsPDF);

// Crear un botón para cambiar a la versión en inglés
const languageButtonToEnglish = document.createElement('button');
languageButtonToEnglish.textContent = 'Cambiar a Inglés';
languageButtonToEnglish.style.position = 'fixed';
languageButtonToEnglish.style.top = '50px';
languageButtonToEnglish.style.right = '10px';
languageButtonToEnglish.style.padding = '10px 15px';
languageButtonToEnglish.style.backgroundColor = '#28A745';
languageButtonToEnglish.style.color = 'white';
languageButtonToEnglish.style.border = 'none';
languageButtonToEnglish.style.borderRadius = '5px';
languageButtonToEnglish.style.cursor = 'pointer';
languageButtonToEnglish.style.zIndex = '1000';
document.body.appendChild(languageButtonToEnglish);

// Función para cambiar a la versión en inglés
function switchToEnglish() {
  // Codificando el espacio correctamente para GitHub Pages
  window.location.href = "/english/index%20english.html";
}

// Crear un botón para regresar a la versión en español
const languageButtonToSpanish = document.createElement('button');
languageButtonToSpanish.textContent = 'Regresar a Español';
languageButtonToSpanish.style.position = 'fixed';
languageButtonToSpanish.style.top = '100px';
languageButtonToSpanish.style.right = '10px';
languageButtonToSpanish.style.padding = '10px 15px';
languageButtonToSpanish.style.backgroundColor = '#FF0000';
languageButtonToSpanish.style.color = 'white';
languageButtonToSpanish.style.border = 'none';
languageButtonToSpanish.style.borderRadius = '5px';
languageButtonToSpanish.style.cursor = 'pointer';
languageButtonToSpanish.style.zIndex = '1000';
document.body.appendChild(languageButtonToSpanish);

// Función para regresar a la versión en español
function switchToSpanish() {
  window.location.href = "/index.html";
}

// Vincular los botones con sus acciones correspondientes
languageButtonToEnglish.addEventListener('click', switchToEnglish);
languageButtonToSpanish.addEventListener('click', switchToSpanish);

