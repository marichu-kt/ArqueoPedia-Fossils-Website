/* █▀▀ █▀█ █▄░█ ▀█▀ ▄▀█ █▀▀ ▀█▀ █▀█ ░ ░░█ █▀ */
/* █▄▄ █▄█ █░▀█ ░█░ █▀█ █▄▄ ░█░ █▄█ ▄ █▄█ ▄█ */

// Agrega un evento para validar el formulario al enviarlo
document.getElementById("miFormulario").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  let formularioValido = true;

  // Restablece bordes y elimina mensajes de error previos
  [nombre, email, telefono].forEach((campo) => {
    campo.style.border = ""; // Restablece borde
    const mensajeError = campo.nextElementSibling; // Busca mensajes previos
    if (mensajeError) mensajeError.remove(); // Elimina mensajes
  });

  // Valida el nombre
  if (!nombre.value.trim()) {
    mostrarError(nombre, "El nombre no puede estar vacío.");
    formularioValido = false;
  }

  // Valida el correo
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    mostrarError(email, "Por favor, ingresa un correo válido.");
    formularioValido = false;
  }

  // Valida el teléfono
  const prefijoEliminado = telefono.value.trim().replace(/^\+\d+\s/, ''); // Quita prefijo
  if (!/^\d*$/.test(prefijoEliminado)) {
    mostrarError(telefono, "El teléfono debe contener solo números.");
    formularioValido = false;
  }

  // Evita el envío si hay errores
  if (!formularioValido) {
    event.preventDefault();
  }
});

// Muestra mensajes de error
function mostrarError(campo, mensaje) {
  campo.style.border = "2px solid red"; // Borde rojo
  const mensajeError = document.createElement("span"); // Crea mensaje
  mensajeError.style.color = "red"; // Texto rojo
  mensajeError.style.fontSize = "12px"; // Tamaño pequeño
  mensajeError.textContent = mensaje; // Mensaje de error
  campo.parentElement.appendChild(mensajeError); // Agrega al DOM
}
