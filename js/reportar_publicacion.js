// Función para cambiar de sección
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'mis_publicaciones.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'publicaciones.html';
    } else if (section === 'perfil') {
        window.location.href = 'perfil.html';
    }
    else if (section === 'otros') {
        window.location.href = 'otros.html';
    }
    // Agregar más redirecciones según sea necesario
    console.log(`Navegando a: ${section}`);
}

function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        alert('Sesión cerrada');
        // Redirigir al login
        window.location.href = 'index.html';
    }
}