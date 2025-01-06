/* █▀▀ █▀█ █▀█ █▄▀ █ █▀▀ █▀ ░ ░░█ █▀ */
/* █▄▄ █▄█ █▄█ █░█ █ ██▄ ▄█ ▄ █▄█ ▄█ */

window.onload = function() {
    var acceptButton = document.getElementById("acceptCookieConsent"); // Botón para aceptar cookies
    var declineButton = document.getElementById("declineCookieConsent"); // Botón para rechazar cookies
    var cookieConsentOverlay = document.getElementById("cookieConsentOverlay"); // Overlay del aviso de cookies

    // Desactiva el scroll cuando se muestra el aviso de cookies
    function disableScroll() {
        document.body.classList.add("no-scroll");
    }

    // Activa el scroll después de aceptar las cookies
    function enableScroll() {
        document.body.classList.remove("no-scroll");
    }

    // Acción al aceptar cookies
    acceptButton.onclick = function() {
        setCookie("cookieConsent", "accepted", 7); // Configura la cookie por 7 días
        cookieConsentOverlay.style.display = "none"; // Oculta el aviso de cookies
        enableScroll(); // Activa el scroll
    };

    // Acción al rechazar cookies
    declineButton.onclick = function() {
        window.location.href = "404.html"; // Redirige a una página de error
    };

    // Verifica si la cookie de consentimiento existe
    function checkCookie() {
        var user = getCookie("cookieConsent");
        if (user !== "accepted") {
            cookieConsentOverlay.style.display = "flex"; // Muestra el aviso si no hay consentimiento
            disableScroll(); // Desactiva el scroll
        } else {
            cookieConsentOverlay.style.display = "none"; // Oculta el aviso si ya hay consentimiento
            enableScroll(); // Activa el scroll
        }
    }

    // Establece una cookie con nombre, valor y duración en días
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Calcula la fecha de expiración
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/"; // Configura la cookie
    }

    // Obtiene el valor de una cookie por su nombre
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';'); // Divide las cookies en un array
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length); // Elimina espacios al inicio
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length); // Devuelve el valor si coincide
        }
        return null; // Retorna null si no encuentra la cookie
    }

    checkCookie(); // Verifica el estado del consentimiento de cookies al cargar la página
}
