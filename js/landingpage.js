document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-link');
      const idiomaSelector = document.getElementById("idioma-selector");

  idiomaSelector.addEventListener("change", () => {
    const idioma = idiomaSelector.value;

    if (idioma === "en") {
        document.getElementById("acceder").innerText = "Log in";
        document.getElementById("titulo-principal").innerText = "You lost something, but you're not alone.";
        document.getElementById("subtitulo").innerText = "With SafeCampus, report and find your lost items in seconds.";
        document.getElementById("subtitulo2").innerText = "Fast. Safe. Efficient";
        document.getElementById("btn-empezar").innerText = "Start now";
        document.getElementById("inicio").innerText = "Home";
        document.getElementById("como-funciona").innerText = "How it works";
        document.getElementById("caracteristicas").innerText = "Features";
        document.getElementById("quienes-somos").innerText = "Who we are?";
        document.getElementById("como-funciona2").innerText = "How it works?";
        document.getElementById("funcionamiento-titulo1").innerText = "Report or search for an object";
        document.getElementById("funcionamiento-subtitulo1").innerText = "Access the app and complete a short form with a photo, location and description of the object.";
        document.getElementById("funcionamiento-titulo2").innerText = "Find";
        document.getElementById("funcionamiento-subtitulo2").innerHTML = "Check the items reported by other users.<br>If you recognize what you lost, report it directly from the app and provide details to validate it.";
        document.getElementById("funcionamiento-titulo3").innerText = "Safe recovery";
        document.getElementById("funcionamiento-subtitulo3").innerText = "Once your report has been validated, you will receive instructions on how to pick up your item from the lost and found area of the school.";
        document.getElementById("caracteristicas2").innerText = "Features";
        document.getElementById("carac-titulo1").innerText = "Security";
        document.getElementById("carac-titulo2").innerText = "Contact";
        document.getElementById("carac-titulo3").innerText = "Search";
        document.getElementById("carac-subtitulo1").innerText = "SafeCampus will only allow users to register with their institutional email address, thus ensuring that they belong to a university center.";
        document.getElementById("carac-subtitulo2").innerText = "The SafeCampus system, upon detecting an object that meets the characteristics of an object reported as missing, will notify the user of the match.";
        document.getElementById("carac-subtitulo3").innerText = "The SafeCampus system will use a filter and tag search to show better results and more specific detection of lost objects";
        document.getElementById("quienes-somos2").innerText = "Who we are?";
        document.getElementById("descripcion1").innerText = "We are Lostify, a startup committed to improving university life through technology. We were born with the mission to solve an everyday problem: the loss of objects on campus.";
        document.getElementById("descripcion2").innerText = "Our team is made up of young people passionate about innovation, safety and student wellbeing. We believe in the power of community and technology as a bridge to connect people, solve problems and strengthen solidarity in educational environments.";
        document.getElementById("descripcion3").innerText = '"Get back what you lost"';
        document.getElementById("integrantes-titulo").innerText = "Members";
        document.getElementById("frase").innerText = '"Get back what you lost"';
        document.getElementById("footer-section1").innerText = "Navigation links";
        document.getElementById("footer-section2").innerText = "Contact us";
        document.getElementById("footer-inicio").innerText = "Home";
        document.getElementById("footer-caracteristicas").innerText = "Features";
        document.getElementById("footer-planes").innerText = "Plans";
        document.getElementById("footer-PF").innerText = "FAQ";
        document.getElementById("copy").innerText = "©2025 Copyright Lostify. All rights reserved";


      // Aquí seguirías agregando el resto de traducciones
    } else {
        document.getElementById("acceder").innerText = "Acceder";
        document.getElementById("titulo-principal").innerText = "Perdiste algo, pero no estás solo.";
        document.getElementById("subtitulo").innerText = "Con SafeCampus, reporta y encuentra tus objetos extraviados en segundos.";
        document.getElementById("btn-empezar").innerText = "Empieza ahora";
        document.getElementById("subtitulo2").innerText = "Rápido. Seguro. Eficiente.";
        document.getElementById("inicio").innerText = "Inicio";
        document.getElementById("como-funciona").innerText = "¿Cómo funciona?";
        document.getElementById("caracteristicas").innerText = "Características";
        document.getElementById("quienes-somos").innerText = "¿Quiénes Somos?";
        document.getElementById("como-funciona2").innerText = "¿Cómo funciona?";
        document.getElementById("funcionamiento-titulo1").innerText = "Reporta o busca un objeto";
        document.getElementById("funcionamiento-subtitulo1").innerText = "Accede a la app y completa un breve formulario con una foto, ubicación y descripción del objeto.";
        document.getElementById("funcionamiento-titulo2").innerText = "Encuentra";
        document.getElementById("funcionamiento-subtitulo2").innerHTML = "Revisa los objetos reportados por otros usuarios.<br>Si reconoces lo que perdiste, avísalo directamente desde la app y da los detalles para validarlo.";
        document.getElementById("funcionamiento-titulo3").innerText = "Recupera de forma segura";
        document.getElementById("funcionamiento-subtitulo3").innerText = "Una vez validado tu reporte, recibirás instrucciones para recoger tu objeto en el área de objetos perdidos del establecimiento educativo.";
        document.getElementById("caracteristicas2").innerText = "Características";
        document.getElementById("carac-titulo1").innerText = "Seguridad";
        document.getElementById("carac-titulo2").innerText = "Contacto";
        document.getElementById("carac-titulo3").innerText = "Busqueda";
        document.getElementById("carac-subtitulo1").innerText = "SafeCampus solo permitirá a los usuarios registrarse con su correo institucional asegurado así su pertenencia a un centro universitario";
        document.getElementById("carac-subtitulo2").innerText = "El sistema de SafeCampus al detectar un objeto que cumpla con las características de un objeto reportado como perdido, notificará al usuario de la coincidencia";
        document.getElementById("carac-subtitulo3").innerText = "El sistema de SafeCampus usará una busqueda mediante filtros y etiquetas para mostrar mejores resultados y detectar de forma más específica los objetos perdidos";
        document.getElementById("quienes-somos2").innerText = "¿Quiénes Somos?";
        document.getElementById("descripcion1").innerText = "Somos Lostify, una startup comprometida con mejorar la vida universitaria mediante tecnología. Nacimos con la misión de resolver un problema cotidiano: la pérdida de objetos dentro del campus.";
        document.getElementById("descripcion2").innerText = "Nuestro equipo está formado por jóvenes apasionados por la innovación, la seguridad y el bienestar estudiantil. Creemos en el poder de la comunidad y en la tecnología como puente para conectar personas, resolver problemas y fortalecer la solidaridad en los entornos educativos.";
        document.getElementById("descripcion3").innerText = '"Recupera lo que perdiste"';
        document.getElementById("integrantes-titulo").innerText = "Integrantes";
        document.getElementById("frase").innerText = '"Recupera lo que perdiste"';
        document.getElementById("footer-section1").innerText = "Enlaces de navegación";
        document.getElementById("footer-section2").innerText = "Contactenos";
        document.getElementById("footer-inicio").innerText = "Inicio";
        document.getElementById("footer-caracteristicas").innerText = "Características";
        document.getElementById("footer-planes").innerText = "Planes";
        document.getElementById("footer-PF").innerText = "Preguntas frecuentes";
        document.getElementById("copy").innerText = "©2025 Copyright Lostify. Todos los derechos reservados";
    }
  });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculamos la posición considerando el alto del header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ajustar el padding-top del body para el header fijo
    const headerHeight = document.querySelector('.header').offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
});