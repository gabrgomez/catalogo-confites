
$(document).ready(function() {
    // Cuando se envía el formulario
    $('#formulario').click(function(event) {
      event.preventDefault(); // Prevenir el envío del formulario
  
      // Validar el nombre
      var nombre = $('#nombre').val().trim();
      if (nombre === '') {
        
        $('#nombre').focus();
        return false;
      }
  
      // Validar el correo
      var correo = $('#correo').val().trim();
      if (correo === '') {
        
        $('#correo').focus();
        return false;
      } else if (!validarCorreo(correo)) {
        alert('El correo electrónico ingresado no es válido.');
        $('#correo').focus();
        return false;
      }
  
      // Validar el mensaje
      var mensaje = $('#mensaje').val().trim();
      if (mensaje === '') {
        
        $('#mensaje').focus();
        return false;
      }
  
      // Si se pasan todas las validaciones, enviar el formulario
      //this.submit();
      alert("¡Mensaje enviado!");
    });
  
    // Función para validar el correo electrónico
    function validarCorreo(correo) {
      var expresion = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
      return expresion.test(correo);
    }
    
  });
