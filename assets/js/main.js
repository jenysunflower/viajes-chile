$(function(){

    /* Se agrega para tooltips */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    var correoClick = $('#enviarEmail');
            correoClick.click(function(e) {
                alert("El correo fue enviado correctamente.")
            });




});




