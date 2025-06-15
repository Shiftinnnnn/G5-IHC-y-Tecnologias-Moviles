document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('.barra_lateral a');
        const botonMisPublicaciones = document.getElementById('btn_mis_publi');
        const contenido = document.getElementById('contenido_publicaciones');

        // Agregar comportamiento a cada enlace
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                // Clase activa en el menú
                links.forEach(el => el.classList.remove('activo'));
                this.classList.add('activo');

                // Mostrar contenido solo si se hace clic en "Mis Publicaciones"
                if (this === botonMisPublicaciones) {
                    e.preventDefault(); // evita navegación si hay href="#"
                    if (contenido) {
                        contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
                    }
                }
            });
        });
    });