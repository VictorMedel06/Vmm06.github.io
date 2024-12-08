// Asegúrate de incluir la biblioteca html2pdf.js en tu proyecto.
// Puedes añadirla con un enlace CDN:
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

// Comprobación para asegurarnos de que solo el botón de la izquierda se renderiza en index.html
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  // Crear el botón para cambiar a inglés en el lado izquierdo
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

  // Función para cambiar a inglés dinámicamente
  function switchToEnglish() {
    window.location.href = "/english/index.html";
  }

  // Vincular eventos
  languageButtonToEnglish.addEventListener('click', switchToEnglish);
}
