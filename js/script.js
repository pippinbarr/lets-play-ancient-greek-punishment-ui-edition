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


$(document).ready(function () {

  setupSisyphus();
  setupDanaids();
  setupTantalus();
  setupPrometheus();
  setupZeno();

  $('#zeno-dialog').dialog('open');

});
