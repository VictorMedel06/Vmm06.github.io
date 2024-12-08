function downloadPageAsPDF() {
  const element = document.body;
  const options = {
    margin: 1,
    filename: 'pagina-web.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(options).from(element).save();
}

// Botón de descarga como PDF
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

// Crear botón de cambiar a inglés, solo si estás en la página principal en español
document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  if (
    currentPath === '/' ||
    currentPath === '/Vmm06.github.io/' ||
    currentPath === '/Vmm06.github.io/index.html'
  ) {
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

    function switchToEnglish() {
      window.location.href = "/english/index.html";
    }

    languageButtonToEnglish.addEventListener('click', switchToEnglish);
  }
});
