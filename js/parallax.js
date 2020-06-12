$(document).ready(function() {
  //PARALLAX

  $(window).scroll(function() {
    //CALCULO LA POSICION DEL SCROLL. CADA VEZ QUE MUEVO LA RUEDA DEL MOUSE SE EJECUTA ESTE CODIGO
    var windowWidth = $(window).width(); //GUARDO EL ANCHO DE LA PANTALLA, YA QUE EN DISPOSITIVOS MOVILES DE UN ANCHO MENOR A 800PX NO TIENE QUE FUNCIONAR

    if (windowWidth > 800) {
      var scroll = $(window).scrollTop(); //su funcionalidad es la de obtener o establecer la posición vertical del scroll dentro de un elemento o div. ES DECIR QUE CALCULA LA POSICION DE LA BARRA DEL SCROLL

      $("header .texts").css({
        transform: "translate(0px," + scroll / 5 + "%)" //NO MODIFICAMOS HORIZONTALMENTE, PERO SI VERTICALMENTE
      });

      $(".main .texts").css({
        transform: "translate(0px,-" + scroll / 6 + "%)" //NO MODIFICAMOS HORIZONTALMENTE, PERO SI VERTICALMENTE
      });
    }
  });

  $(window).resize(function(){
    var windowWidth=$(window).width();
    if(windowWidth>800){
      $('.main texts').css({
        transform: 'translate(0px, 0px)'
      })
    }
  })

});
