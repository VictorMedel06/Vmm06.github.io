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

// Vincular el botón con la funcionalidad para descargar el PDF
downloadButton.addEventListener('click', downloadPageAsPDF);

// Crear un botón para cambiar el idioma a inglés
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

// Función para cambiar la página a la versión en inglés
function switchToEnglish() {
  window.location.href = "./english/index%20english.html";
}

// Vincular el botón con la acción de cambio de idioma
languageButtonToEnglish.addEventListener('click', switchToEnglish);
