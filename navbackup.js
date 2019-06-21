  window.onload = function () {
    $(document).ready(function () {
      $('.offre').on('click', function () {
        $('.offre').removeClass('offre_current');
        $(this).addClass('offre_current');
        // ICI, d'autres traitements, comme par exemple l'affichage d'un CONTENU via AJAX
        // affiche_contenu_ajax(n);
        // [...]
        // OU juste du texte dans un <div>

      });

      // var pos = jQuery('#portolio').position();
 
      // console.log(pos.top);
      // console.log(pos.left);

      $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height, $("#portfolio").scrollTop());

        if (height < 300) {
          $("#position-1").addClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else if (height < 5884) {
          $("#position-2").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else if (height < 7955) {
          $("#position-3").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else {
          $("#position-4").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
        }

      });

      // ELSEWHERE, your code that needs to know the mouse position without an event

    });
  };