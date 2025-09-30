document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');
    function validarFormulario(event) {
        event.preventDefault(); 
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        document.getElementById('error-nombre').textContent = '';
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-mensaje').textContent = '';
        if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
            alert('⚠️ Por favor, llena todos los campos obligatorios para enviar el formulario.');
            
            return;
        }
        form.style.display = 'none'; 
        mensajeExito.style.display = 'block'; 
        return false;
    }
    if (form) {
        form.addEventListener('submit', validarFormulario);
    }
});