document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));
    const item = dataItems.find(item => item.id === itemId);
    if (item) {
        document.getElementById('detalle-titulo-pagina').textContent = item.titulo + ' - Brillo & Estilo';
        document.getElementById('detalle-titulo').textContent = item.titulo;
        document.getElementById('detalle-descripcion').textContent = item.descripcion;
        document.getElementById('detalle-precio').textContent = '$' + item.precio.toFixed(2);
        if (item.imagen && item.imagen !== '') {
            const imgElement = document.createElement('img');
            imgElement.id = 'detalle-imagen';
            imgElement.src = item.imagen;
            imgElement.alt = item.titulo;
            imgElement.classList.add('detalle-imagen-style'); 
            const tituloElement = document.getElementById('detalle-titulo');
            tituloElement.after(imgElement); 
        }
    } else {
        document.getElementById('detalle-titulo').textContent = 'Artículo no encontrado';
        document.getElementById('detalle-descripcion').textContent = 'Lo sentimos, el producto o servicio solicitado no se encuentra disponible.';
        document.getElementById('detalle-precio').textContent = '';
    }
});