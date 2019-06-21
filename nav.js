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

        if (height < 755) {
          $("#position-1").addClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else if (height < 3820) {
          $("#position-2").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else if (height < 4516) {
          $("#position-3").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-4").removeClass('offre_current');
        } else if (height<4817){
          $("#position-4").addClass('offre_current');
          $("#position-1").removeClass('offre_current');
          $("#position-2").removeClass('offre_current');
          $("#position-3").removeClass('offre_current');
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

/* ====== Add Smooth effect ===== */
// $(function() {
//   var scrollToAnchor = function( id ) {
//     var elem = $("section[id='"+ id +"']"); // on crée une balise d'ancrage
//     if ( typeof elem.offset()  === "undefined" ) { // on verifie si l'élément existe
//         elem = $("#"+id); }
//     if ( typeof elem.offset()  !== "undefined" ) { // si l'élément existe, on continue
//       $('html, body').animate({
//               scrollTop: elem.offset().top }, 600 );} // on défini un temps de défilement de page
//   };
//   $("a").click(function( event ) { // on attache la fonction au click
//     if ( $(this).attr("href").match("#") ) { // on vérifie qu'il s'agit d'une ancre
//       event.preventDefault();
//       var href = $(this).attr('href').replace('#', '') // on scroll vers la cible
//       scrollToAnchor( href ); }
//   });
  /* ====== add class on pagination if the section is visible ====== */
// $(document).scroll(function() {
//   var cutoff = $(window).scrollTop() + 200; // on défini la position de déclenchement (*1)
//   // Find current section and highlight nav menu
//   var curSec = $.find('.current'); // on cherche l'élément (section) avec la class current
//   var curID = $(curSec).attr('id'); // on récupère son ID
//   var curNav = $.find('a[href=#'+curID+']'); // on cherche l'élément de navigation correspondant (*2)
//   $('li .op-v-link').removeClass('active'); // on nettoie la navigation de la class active présente
//   $(curNav).addClass('active'); // (*2) -> on ajoute la class active
//   $('section').each(function(){
//   if($(this).offset().top + $(this).height() > cutoff){ // si la section est dans le champ de scroll
//   $('section').removeClass('current') // on nettoie les sections de la class current présente
//   $(this).addClass('current'); // on ajoute la class current à la section visible
//   return false; // on stoppe l’itération (le cas contraire, seule la derniere section se verra ajouter la class)
//   }
//   });
//   });
// });


