$(function () {

  /* Se agrega para tooltips */
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



  /*    var correoClick = $('#enviarEmail');
             correoClick.click(function(e) {
                 alert("El correo fue enviado correctamente.")
             });
  */

  /* Función para cambiar los colores según se mueve y según se abre */
  $(document).ready(function () {
    var navbar = $('.navbar');
    var navbarToggler = $('.navbar-toggler');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50 || navbarToggler.attr('aria-expanded') === 'true') {
        navbar.addClass('navbar-scrolled');  /* Si el usuario se mueve más de 50 px se activa la clase que crees en el css, en este caso "navbar-scrolled" sino se desactiva  */
      } else {
        navbar.removeClass('navbar-scrolled');
      }
    });

    navbarToggler.on('click', function () {
      if (navbarToggler.attr('aria-expanded') === 'true') { /* Si el usuario abre el navbar también se activa el color para que no quede transparente */
        navbar.addClass('navbar-scrolled');
      } else {

      }
    });
  });



  /* Función para scroll */
  $(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        // Función de Jquery
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });


});




