var formulario = document.getElementById("formulario");
nombre = formulario.nombre;
email = formulario.correo;
mensaje = formulario.mensaje;
error = document.getElementById("error");

function validateName(e) {
  if (nombre.value == "" || nombre.value == null) {
    error.style.display = "block";
    error.innerHTML = error.innerHTML + "<li>Please, complete your name</li>";
    e.preventDefault();
  }//FUNCIONA MEJOR SI NO LE PONEMOS EL ELSE
}

function validateEmail(e) {
  if (email.value == "" || email.value == null) {
    error.style.display = "block";
    error.innerHTML = error.innerHTML + "<li>Please, complete your email</li>";
    e.preventDefault();
  }//FUNCIONA MEJOR SI NO LE PONEMOS EL ELSE
}

function validateMessage(e) {
  if (mensaje.value == "" || mensaje.value == null) {
    error.style.display = "block";
    error.innerHTML =
      error.innerHTML + "<li>Please, complete your message</li>";
    e.preventDefault();
  }//FUNCIONA MEJOR SI NO LE PONEMOS EL ELSE
}

function validateFor(e) {
  error.innerHTML = "";
  validateName(e);
  validateEmail(e);
  validateMessage(e);
}

formulario.addEventListener("submit", validateFor);