// objeto.metodo(json)


$("#formulario1").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtNombre": {
            required: true,
            Nombre: true
        },
        "txtMensaje": {
            required: true,
            Mensaje: true
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email!!!',
            email: 'No cumple formato'
        },
        "txtNombre": {
            required: 'Completa este campo !!!',
            Nombre: 'No cumple formato'
        },
        "txtMensaje": {
            required: 'Completa este campo!!!',
            Mensaje: 'No cumple formato'
        }
    
    } //-->Fin de mensajes


});
