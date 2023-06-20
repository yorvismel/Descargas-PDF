let identificacion = '';
const clientes = {
    15724410: ['15724410', 'Yorvis Alfredo Melendez', '30000 pesos', 'banco popular', -5000],
    859715: ['859715', 'Juanito Gonzalez', '20000 pesos', 'Banco unido', -10000],
    6663979: ['6663979', 'Jorge Ivan Cano Macias', '1000000 pesos', 'Bancolombia', -500000]
};

while (identificacion === '') {
    identificacion = prompt('Introduzca su número de identidad');
}

if (clientes.hasOwnProperty(identificacion)) {
    const cliente = clientes[identificacion];
    const informacion = document.getElementById('informacion');
    informacion.textContent = `Número de cédula: ${cliente[0]}\nNombre: ${cliente[1]}\nSaldo a su favor: ${cliente[2]}\nBanco: ${cliente[3]}\nDeuda: ${cliente[4]}`;

    // Manejar el evento de clic en el botón de descarga
    const btnDescargarPDF = document.getElementById('btnDescargarPDF');
    btnDescargarPDF.addEventListener('click', function() {
        // Crear un nuevo documento PDF
        const doc = new jsPDF();
        // Agregar el contenido al PDF
        
        doc.text(informacion.textContent, 10, 10);
        // Guardar el archivo PDF con el nombre deseado
        doc.save('informacion_cliente.pdf');
    });
}

const elemento = document.getElementById('saludo');
elemento.textContent = `Bienvenido(a) ${identificacion} a nuestra sucursal`;
