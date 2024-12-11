document.addEventListener('DOMContentLoaded', function () {
  // Función para descargar la página como PDF
  function downloadPageAsPDF() {
    const element = document.body; // Cambia esto si quieres descargar un elemento específico
    const options = {
      margin: 1,
      filename: 'pagina-web.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        console.log('PDF descargado exitosamente.');
        // Redirigir a la página en inglés después de la descarga
        window.location.href = "https://victormedel06.github.io/Vmm06.github.io/english/index.html";
      })
      .catch((error) => {
        console.error('Error al generar el PDF:', error);
      });
  }

  // Crear y añadir el botón de descarga de PDF
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

  // Crear y añadir el botón de cambio a inglés si estamos en la página correcta
  const currentPath = window.location.pathname;

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
      window.location.href = "https://victormedel06.github.io/Vmm06.github.io/english/index.html";
    });
  } else {
    console.warn('No se agregó el botón de cambio a inglés porque no es la página principal.');
  }
});
