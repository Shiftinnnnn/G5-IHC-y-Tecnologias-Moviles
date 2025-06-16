// Función para cambiar de sección
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'mis_publicaciones.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'publicaciones.html';
    }
    // Agregar más redirecciones según sea necesario
    console.log(`Navegando a: ${section}`);
}