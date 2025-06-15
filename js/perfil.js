document.addEventListener("DOMContentLoaded", () => {
    
    const modoOscuroSwitch = document.querySelectorAll('.switch input')[0];
    const idiomaSelect = document.querySelector('select');

    // Funcionalidad Modo Oscuro
    modoOscuroSwitch.addEventListener('change', () => {
        if (modoOscuroSwitch.checked) {
            document.body.classList.add('modo-oscuro');
        } else {
            document.body.classList.remove('modo-oscuro');
        }
    });

    // Funcionalidad cambio de idioma (simulada)
    idiomaSelect.addEventListener('change', () => {
        if (idiomaSelect.value === 'Inglés') {
            document.querySelector('.profile-header').innerText = 'My Profile';
            document.querySelector('label[for="nombres"]').innerText = 'First Name';
            document.querySelector('label[for="apellidos"]').innerText = 'Last Name';
            // Y así puedes ir agregando más traducciones si lo deseas...
        } else {
            document.querySelector('.profile-header').innerText = 'Mi Perfil';
            document.querySelector('label[for="nombres"]').innerText = 'Nombres';
            document.querySelector('label[for="apellidos"]').innerText = 'Apellidos';
        }
    });

});