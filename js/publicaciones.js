// Datos de las publicaciones para el detalle
const publicacionesData = {
    1: {
        objeto: 'Cartuchera',
        sede: 'San Isidro',
        area: 'Salon B311',
        fecha: '10/05/2025',
        usuario: 'Jose Galvez',
        descripcion: 'Cartuchera de color azul con detalles blancos. Contiene varios lápices, bolígrafos y una regla pequeña. Se encuentra en buen estado.',
        hallazgo: 'Fue encontrada en el Salón B311, sobre una de las mesas del lado derecho, cerca de la ventana.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'img/publicaciones/cartu.jpg'
    },
    2: {
        objeto: 'Celular',
        sede: 'San Miguel',
        area: 'Salon C708',
        fecha: '09/10/2025',
        usuario: 'Antonio Hernandez',
        descripcion: 'Celular smartphone de color negro, marca Samsung. Tiene una funda protectora transparente y presenta algunos rayones menores en la pantalla.',
        hallazgo: 'Fue encontrado en el Salón C708, debajo de una silla en la tercera fila.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'img/publicaciones/celular_p.jpg'
    },
    3: {
        objeto: 'Bolso',
        sede: 'Monterico',
        area: 'Salon B201',
        fecha: '21/08/2025',
        usuario: 'Juana Margarita',
        descripcion: 'Bolso de tela de color beige con asas largas. Tiene un compartimento principal y un bolsillo frontal con cierre. En su interior había algunos documentos.',
        hallazgo: 'Fue encontrado en el Salón B201, colgado en el respaldo de una silla en la primera fila.',
        status: 'En mi posesión',
        ubicacion: 'En mi posesión',
        imagen: 'img/publicaciones/bolso_p.jpg'
    },
    4: {
        objeto: 'Mochila',
        sede: 'San Miguel',
        area: 'Salon B705',
        fecha: '14/04/2025',
        usuario: 'Ariana Casas',
        descripción: 'Mochila escolar de color rojo con detalles grises. Tiene varios compartimentos y se encuentra en buen estado general.',
        hallazgo: 'Fue encontrada en el Salón B705, debajo de una mesa en la parte posterior del aula.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'img/publicaciones/mochila_p.jpg'
    }
};

// Función para ver el detalle de una publicación
function verDetalle(publicacionId) {
    // Guardar los datos de la publicación en localStorage para pasarlos a la página de detalle
    const publicacion = publicacionesData[publicacionId];
    if (publicacion) {
        localStorage.setItem('publicacionDetalle', JSON.stringify(publicacion));
        // Redirigir a la página de detalle
        window.location.href = 'detalle_publicaciones.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.barra_lateral a');
    const botonMisPublicaciones = document.getElementById('btn_publi');
    const contenido = document.getElementById('contenido_publicaciones');
    const filtroSede = document.querySelector('#menuFiltros input:nth-of-type(1)');
    const filtroArea = document.querySelector('#menuFiltros input:nth-of-type(2)');
    const filtroDia = document.querySelector('#menuFiltros input:nth-of-type(3)');
    const btnFavorito = document.querySelector('.Circulo');
    const barraBusqueda = document.getElementById('barraBusqueda');
    const btnBusqueda = document.querySelector('.busqueda button[type="submit"]');
    const menuFiltros = document.getElementById('menuFiltros');

    // Mostrar/ocultar contenido de publicaciones
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            links.forEach(el => el.classList.remove('activo'));
            this.classList.add('activo');
            if (this === botonMisPublicaciones) {
                e.preventDefault();
                contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Mostrar/ocultar menú de filtros
    window.toggleFiltro = function () {
        menuFiltros.style.display = (menuFiltros.style.display === 'flex') ? 'none' : 'flex';
    };

    // Activar/desactivar estrella de favoritos en cada publicación
    window.toggleEstrella = function (btn) {
        btn.classList.toggle('activa');
    };

    // Búsqueda por objeto desde la barra de búsqueda
    btnBusqueda.addEventListener('click', function (e) {
        e.preventDefault();
        aplicarFiltros();
    });

    // Filtro por favoritos (cuando se pulsa el botón circular)
    btnFavorito.addEventListener('click', function () {
        aplicarFiltros(true);
    });

    function reposicionarPostsVisibles() {
        const posts = document.querySelectorAll('.post');
        let topInicial = 160;
        let spacing = 200;
        let index = 0;

        posts.forEach(post => {
            if (post.style.display !== 'none') {
                post.style.position = 'fixed';
                post.style.top = `${topInicial + index * spacing}px`;
                post.style.left = '340px';
                post.style.margin = '0';
                post.style.zIndex = '10';
                index++;
            } else {
                post.style.position = '';
                post.style.top = '';
                post.style.left = '';
                post.style.margin = '';
                post.style.zIndex = '';
            }
        });
    }

    // Función de filtrado principal
    function aplicarFiltros(soloFavoritos = false) {
        const posts = document.querySelectorAll('.post');
        const textoBusqueda = barraBusqueda.value.trim().toLowerCase();

        if (textoBusqueda === "" && !soloFavoritos) {
            posts.forEach(post => {
                post.style.display = 'block';

                // Restaurar el diseño original eliminando cambios forzados
                post.style.position = '';
                post.style.top = '';
                post.style.left = '';
                post.style.margin = '';
                post.style.zIndex = '';
            });
            return;
        }

        posts.forEach(post => {
            const dataObjeto = (post.dataset.objeto || "").toLowerCase();
            let visible = true;

            if (textoBusqueda && !dataObjeto.includes(textoBusqueda)) visible = false;
            if (soloFavoritos && !post.querySelector('.estrella')?.classList.contains('activa')) visible = false;

            post.style.display = visible ? 'block' : 'none';
        });

        reposicionarPostsVisibles(); // Solo cuando hay filtro activo
    }
});

// Función para cambiar de sección
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'mis_publicaciones.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'publicaciones.html';
    } else if (section === 'perfil') {
        window.location.href = 'perfil.html';
    }
    // Agregar más redirecciones según sea necesario
    console.log(`Navegando a: ${section}`);
}