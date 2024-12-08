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

// Crear el botón dinámico en la parte derecha
const languageButtonToEnglishDynamic = document.createElement('button');
languageButtonToEnglishDynamic.textContent = 'Cambiar a Inglés';
languageButtonToEnglishDynamic.style.position = 'fixed';
languageButtonToEnglishDynamic.style.top = '50px';
languageButtonToEnglishDynamic.style.right = '10px';
languageButtonToEnglishDynamic.style.padding = '10px 15px';
languageButtonToEnglishDynamic.style.backgroundColor = '#28A745';
languageButtonToEnglishDynamic.style.color = 'white';
languageButtonToEnglishDynamic.style.border = 'none';
languageButtonToEnglishDynamic.style.borderRadius = '5px';
languageButtonToEnglishDynamic.style.cursor = 'pointer';
languageButtonToEnglishDynamic.style.zIndex = '1000';
document.body.appendChild(languageButtonToEnglishDynamic);

// Función para cambiar a inglés dinámicamente
function switchToEnglish() {
  window.location.href = "/english/index.html";
}

// Asignar el evento de clic al botón dinámico
languageButtonToEnglishDynamic.addEventListener('click', switchToEnglish);

// Eliminar el botón dinámico de la derecha después de agregarlo
setTimeout(() => {
  if (languageButtonToEnglishDynamic) {
    languageButtonToEnglishDynamic.remove();
  }
}, 10); // Retraso mínimo para asegurarse de que se haya agregado antes de eliminarlo
