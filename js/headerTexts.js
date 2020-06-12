$(document).ready(function () {
  //EFECTO HEADER EN TEXTS
  if ($(window).width() > 800) {
    $("header .texts").css({
      opacity: "0",
      marginTop: "0",
    });

    $("header .texts").animate(
      {
        opacity: "1",
        marginTop: "-52",
      },
      2000
    );
  }
});
