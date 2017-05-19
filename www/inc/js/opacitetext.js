$(function() {

  'use strict';

  

$( ".rig-img" ).on({
   mouseenter: function(event) {/* Fonction qui attribue la class opacitetexte a l'entrer de la souris*/
    $( event.target ).siblings(".rig-text").addClass( "opacitetexte" );
  }, mouseleave: function(event) {/* Fonction qui supprime la class opacitetexte a la sortie de la souris*/
     $( event.target ).siblings(".rig-text").removeClass( "opacitetexte" );
  }
});
  });