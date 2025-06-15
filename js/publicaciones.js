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
