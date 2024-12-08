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

// Función para crear el botón de Cambiar a Inglés
document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  console.log('Ruta actual:', currentPath); // Para depurar

  if (
    currentPath === '/' || 
    currentPath === '/Vmm06.github.io/' ||
    currentPath === '/Vmm06.github.io/index.html'
  ) {
    const englishButton = document.createElement('button');
    englishButton.textContent = 'Cambiar a Inglés';
    englishButton.style.position = 'fixed';
    englishButton.style.top = '10px';
    englishButton.style.left = '10px';
    englishButton.style.padding = '10px 15px';
    englishButton.style.backgroundColor = '#28A745';
    englishButton.style.color = 'white';
    englishButton.style.border = 'none';
    englishButton.style.borderRadius = '5px';
    englishButton.style.cursor = 'pointer';
    englishButton.style.zIndex = '1000';

    document.body.appendChild(englishButton);

    englishButton.addEventListener('click', function () {
      window.location.href = "/Vmm06.github.io/english/index.html";
    });
  }
});
