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

let mobile = false;

$(document).ready(function () {

  mobile = (window.screen.width < 768) && (window.screen.width < window.screen.height);
  
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
  if (mobile && $(window).width() > $(window).height()) {
    $('#orientation-message').show();
  }
  else {
    $('#orientation-message').hide();
  }
}
