$(document).ready(function() {
    //MENU
    $(".menu a").each(function(index, element) {
      $(this).css({
        top: "-200px"
      });
  
      $(this).animate(
        {
          top: 0
        },
        500 + 500 * index
      );
    });

});