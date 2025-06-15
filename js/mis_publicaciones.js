// Datos de las publicaciones
const publicacionesData = {
    1: {
        objeto: 'Cartuchera',
        sede: 'San Miguel',
        area: 'Salon B405',
        fecha: '13/04/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Presenta marcas con liquid en la parte del cierre, además es de color rojo y negro. Tiene varios lapiceros y lápices en su interior.',
        hallazgo: 'Fue encontrado en el Salón B405, en el último asiento al lado de la ventana que da hacia el patio, en una esquina.',
        status: 'En Objetos Perdidos',
        imagen: 'img/mis_publicaciones/SU-CARTLI-sub-550x550.jpg'
    },
    2: {
        objeto: 'Celular',
        sede: 'San Miguel',
        area: 'Salon B405',
        fecha: '13/04/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Celular Samsung Galaxy A52, color negro, con una funda transparente. La pantalla tiene algunos rayones menores pero funciona perfectamente.',
        hallazgo: 'Fue encontrado debajo de una mesa en el Salón B405, cerca del escritorio del profesor.',
        status: 'En mi posesión',
        imagen: 'img/mis_publicaciones/celular.jpg'
    },
    3: {
        objeto: 'Bolso',
        sede: 'San Isidro',
        area: 'Salon B303',
        fecha: '12/05/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Bolso de cuero marrón, marca desconocida. Tiene varios compartimentos y una correa ajustable. En su interior había algunos documentos y llaves.',
        hallazgo: 'Fue encontrado en el Salón B303, colgado en el respaldo de una silla en la primera fila.',
        status: 'En mi posesión',
        imagen: 'img/mis_publicaciones/bolso.jpg'
    },
    4: {
        objeto: 'Mochila',
        sede: 'San Miguel',
        area: 'Salon B705',
        fecha: '14/04/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Mochila deportiva azul con detalles blancos, marca Nike. Tiene varios compartimentos y está en buen estado.',
        hallazgo: 'Fue encontrada en el Salón B705, debajo de una mesa en la parte posterior del aula.',
        status: 'Entregado',
        imagen: 'img/mis_publicaciones/mochila.jpg'
    }
};

// Función para ver el detalle de una publicación
function verDetalle(publicacionId) {
    // Guardar los datos de la publicación en localStorage para pasarlos a la página de detalle
    const publicacion = publicacionesData[publicacionId];
    if (publicacion) {
        localStorage.setItem('publicacionDetalle', JSON.stringify(publicacion));
        // Redirigir a la página de detalle
        window.location.href = 'detalle_mis_publicaciones.html';
    }
}

// Funcionalidad principal del DOM
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

    // Inicializar otras funcionalidades si es necesario
    console.log('Sistema de publicaciones inicializado');
    console.log('Publicaciones disponibles:', Object.keys(publicacionesData).length);
});