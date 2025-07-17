/* █▀▀ ▄▀█ █▀█ █▀█ █░█ █▀ █▀▀ █░░ ░ ░░█ █▀ */
/* █▄▄ █▀█ █▀▄ █▄█ █▄█ ▄█ ██▄ █▄▄ ▄ █▄█ ▄█ */

// Selecciona el elemento del carrusel por ID
var myCarousel = document.querySelector('#imageCarousel');

// Inicializa el carrusel
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000, // Intervalo de tiempo cambio de imagen (milisegundos)
  pause: false    // Desactiva la pausa automática cuando el mouse pasa sobre el carrusel
});
