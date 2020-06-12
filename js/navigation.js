 $(document).ready(function () {
    //NAVEGACION

  var menu = $("#menu").offset().top;
  var gallery = $("#gallery").offset().top;
  var ubication = $("#ubication").offset().top;
  var form = $("#formulario1").offset().top;



  $("#btn-menu").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: menu + 450
      },
      500
    );
  });

  $("#btn-gallery").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: gallery
      },
      500
    );
  });

  $("#btn-ubication").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubication + 75
      },
      500
    );
  });

  $("#btn-formulario").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: form
      },
      500
    );
  });
 });
 






