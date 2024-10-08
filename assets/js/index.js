//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("powerbi");
        habilidades[5].classList.add("laravel");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

//codigo para agrandar card de la seccion proyectos
const images = document.querySelectorAll('.card');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)'; // Agranda la imagen al 120%
        image.style.transition = 'transform 0.3s ease'; // Suaviza la transición
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Restaura el tamaño original
    });
});