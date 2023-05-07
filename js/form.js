$(document).ready(function() {
// Validación del formulario

$("#login-form").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 8
    }
  },
  //fin de las reglas
  messages: {
    email: {
      required: "Por favor, introduzca su dirección de correo electrónico",
      email: "Por favor, introduzca una dirección de correo electrónico válida"
    },
    password: {
      required: "Por favor, introduzca su contraseña",
      minlength: "La contraseña debe tener al menos 8 caracteres"
    }
  },
  //fin de los mensajes
  
  




})
//fin del validate
$("#btnInicioSesion").click(function (event) {

  
  

  //   esto es para que no direccione
    event.preventDefault();
    
    if ($("#login-form").valid()) {
      alert("Inició sesion! =D");


}


})
//fin del on click
});
//fin de doc ready
