"use strict";

/*****************************************************

Let's Play: Ancient Greek Punishment: It is as if Edition

A representation of the game Let's Play Ancient Greek Punishment
in the form of standard user-interface elements, styled like
Windows95 or similar.

Uses:

jQuery
http://jquery.com/

jQuery UI
https://jqueryui.com/

jQuery UI Slider Pips Plugin
https://github.com/simeydotme/jQuery-ui-Slider-Pips

******************************************************/

let phone = false;
let touchBased = false;

$(document).ready(function () {

  phone = (window.screen.width < 768) && (window.screen.width < window.screen.height);
  touchBased = (('ontouchstart' in window)
  || (navigator.MaxTouchPoints > 0)
  || (navigator.msMaxTouchPoints > 0));
  console.log(touchBased);

  handleOrientation();


  setupSisyphus();
  setupDanaids();
  setupTantalus();
  setupPrometheus();
  setupZeno();

  $(window).on('resize', function () {
    handleOrientation();
  });

  // $('#zeno-dialog').dialog('open');

});

function handleOrientation() {
  if (phone && $(window).width() > $(window).height()) {
    $('#orientation-message').show();
  }
  else {
    $('#orientation-message').hide();
  }
}
