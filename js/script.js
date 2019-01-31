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

  // $('#prometheus-dialog').dialog('open');

});

// Set up Sisyphus app
//
// In Sisyphus you drag a slider to the maximum value only to see it
// slide immediately back down to the bottom, such that you can never
// submit the dialog to get out.
function setupSisyphus() {

  let $sisyphusDialog = $('#sisyphus-dialog');

  // Create the dialog to house the "app"
  $sisyphusDialog.dialog({
    // You can specify buttons as an array of objects to get finer-grained control
    // In this instance I want to assign an id for later reference
    buttons: [
      {
        id: 'sisyphus-submit',
        text: 'Submit',
        click: function () {
          // Ha ha, the whole point is that you can't successfully click this button
          console.log("This shouldn't be possible.");
        }
      }
    ],
    closeOnEscape: false,
    autoOpen: false
  });
  // Get rid of the 'x' button on the menu bar
  $sisyphusDialog.parent().find(".ui-dialog-titlebar-close").hide();

  // We disable the button at the start (the slider will start at 0)
  $('#sisyphus-submit').button('disable');

  // Store a reference to the slider for easy access
  let $sisyphusSlider = $('#sisyphus-slider');


  // Create the slider element with its options
  $sisyphusSlider.slider({
    orientation: 'horizontal',
    value: 0,
    min: 0,
    max: 10,
    // We need a slide event handler to enable/disable the button based on the current value
    slide: function (event, ui) {
      if (ui.value === $sisyphusSlider.slider('option','max')) {
        $('#sisyphus-submit').button('enable');
      }
      else {
        $('#sisyphus-submit').button('disable');
      }
    },
    // We need a stop event handler to slide the slider back down if they're moved it to the max
    stop: function (event,ui) {
      // Check if they have set the value to its maximum
      if ($sisyphusSlider.slider('option','value') === $sisyphusSlider.slider('option','max')) {
        // If so enable the button in good faith
        $('#sisyphus-submit').button('enable');
        // But also create an interval that will slide the slider back to 0
        // We store a reference to the interval in a variable so we can clear it when it's done
        // (It's possible this could be animated in some other way, but this felt the easiest)
        let lerpInterval = setInterval(() => {
          // Each interval step we disable the button, because we know it's no longer at max
          $('#sisyphus-submit').button('disable');
          // We get the current value
          let v = $sisyphusSlider.slider('value');
          // Reduce it by one
          v--;
          // And set the slider to this new value
          $sisyphusSlider.slider('value',v);
          // If we reach 0, we stop this interval
          if (v === 0) {
            clearInterval(lerpInterval);
          }
        },25);
      }
      // If the slide is stopped not on max, we disable the button
      else {
        // Disable the button
        $('#sisyphus-submit').button('disable');
      }
    }
  });

  // I'm using a jQuery plugin called "slider pips" to be able to label
  // the values of the slider, mostly to capture Windows 95 vibes
  $sisyphusSlider.slider('pips',{
    step: 1,
    first: 'label',
    last: 'label',
    rest: 'label',
    labels: ['0','1','2','3','4','5','6','7','8','9','10'],
  });

  // Set up  the icon
  let $sisyphusIcon = $('#sisyphus-icon');
  $sisyphusIcon.draggable();
  $sisyphusIcon.on('dblclick',function() {
    $sisyphusDialog.dialog('open');
  });
}


// Set up the Danaids app
//
// In Danaids (for now) you try to drag a file of water (an image)
// into a folder that represents the Bath, and it never succeeds, just
// reverting all your efforts.
function setupDanaids() {
  // Set up  the icon
  let  $danaidsIcon = $('#danaids-icon');
  $danaidsIcon.draggable();
  $danaidsIcon.on('dblclick',function() {
    $danaidsDialog.dialog('open');
  });

  let $danaidsDialog = $('#danaids-dialog');

  // Create the dialog to house the "app"
  $danaidsDialog.dialog({
    closeOnEscape: false,
    autoOpen: false
  });
  // Get rid of the 'x' button on the menu bar
  $danaidsDialog.parent().find(".ui-dialog-titlebar-close").hide();

  // Make the water icon draggable and tell it to revert if dragged to the folder
  // That's literally the punishment moment.
  let $waterIcon = $('#water-icon');
  $waterIcon.draggable({
    revert: 'valid'
  });
  // Center it
  $waterIcon.css('margin','0 auto');

  // Make the folder icon droppable  (so the drag recognizes it) and give it a
  // highlight when the water is over it
  let $folderIcon = $('#folder-icon');
  $folderIcon.droppable({
    classes: {
      "ui-droppable-hover": "ui-state-hover"
    }
  });
  // Center it
  $folderIcon.css('margin','0 auto');
}

// Set up the Tantalus app
//
// In Tantalus you're asked to select a food or drink but when you open the
// menu both options are disabled. Most of this is actually in the HTML.
function setupTantalus() {
  // Set up  the icon
  let  $tantalusIcon = $('#tantalus-icon');
  $tantalusIcon.draggable();
  $tantalusIcon.on('dblclick',function() {
    $tantalusDialog.dialog('open');
  });

  let $tantalusDialog = $('#tantalus-dialog');

  // Create the dialog to house the "app"
  $tantalusDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    // You can specify buttons as an array of objects to get finer-grained control
    // In this instance I want to assign an id for later reference
    buttons: [
      {
        id: 'tantalus-submit',
        text: 'Submit',
        click: function () {
          // Ha ha, the whole point is that you can't successfully click this button
          console.log("This shouldn't be possible.");
        }
      }
    ],
  });
  // Get rid of the 'x' button on the menu bar
  $tantalusDialog.parent().find(".ui-dialog-titlebar-close").hide();

  // We disable the button at the start
  $('#tantalus-submit').button('disable');

  // Set the menu to be jQuery mostly so it gets styled with the stylesheet
  let $tantalusMenu = $('#tantalus-menu');
  $tantalusMenu.selectmenu();
}

// Set up the Prometheus app
//
// In Prometheus you're asked to select a food or drink but when you open the
// menu both options are disabled. Most of this is actually in the HTML.
function setupPrometheus() {
  // Set up  the icon
  let  $prometheusIcon = $('#prometheus-icon');
  $prometheusIcon.draggable();
  $prometheusIcon.on('dblclick',function() {
    $prometheusDialog.dialog('open');
  });

  let $prometheusDialog = $('#prometheus-dialog');

  // Create the dialog to house the "app"
  $prometheusDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    open: function () {
      setTimeout(function () {
        $peckDialog.dialog('open');
      },4000);
    }
  });
  // Get rid of the 'x' button on the menu bar
  $prometheusDialog.parent().find(".ui-dialog-titlebar-close").hide();

  // We disable the button at the start
  // $('#prometheus-submit').button('disable');

  // Set the menu to be jQuery mostly so it gets styled with the stylesheet
  let $liverProgress = $('#liver-progress');
  $liverProgress.progressbar({
    value: 100
  });

  let $peckDialog = $('#peck-dialog');

  // Create the dialog to house the "app"
  let peckTimer;
  $peckDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    open: function () {
      let peckTime = 5;
      $('#peck-time').text(peckTime);
      peckTimer = setInterval(function () {
        peckTime--;
        $('#peck-time').text(peckTime);
        if (peckTime === 0) {
          console.log("Autopeck");
          clearInterval(peckTimer);
          let liver = $liverProgress.progressbar('value');
          liver -= 10;
          $liverProgress.progressbar('value',liver);
          $peckDialog.dialog('close');
        }
      },1000);
    },
    buttons: {
      "Cancel": function () {
        $(this).dialog('close');
      },
      "Accept": function () {
        console.log("Self peck");
        let liver = $liverProgress.progressbar('value');
        liver -= 10;
        $liverProgress.progressbar('value',liver);
        $(this).dialog('close');
      }
    },
    close: function () {
      clearInterval(peckTimer);
      let liver = $liverProgress.progressbar('value');
      if (liver === 0) {
        // Need to regenerate the liver
        let regenerateInterval = setInterval(function () {
          liver++;
          $liverProgress.progressbar('value',liver);
          if (liver === 100) {
            clearInterval(regenerateInterval);
            setTimeout(function () {
              $peckDialog.dialog('open');
            },2000 + Math.random() * 2000);
          }
        },50)
      }
      else {
        setTimeout(function () {
          $peckDialog.dialog('open');
        },2000 + Math.random() * 2000);
      }
    }
  });
  // Get rid of the 'x' button on the menu bar
  $peckDialog.parent().find(".ui-dialog-titlebar-close").hide();
}
