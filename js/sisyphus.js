// Set up Sisyphus app
//
// In Sisyphus you drag a slider to the maximum value only to see it
// slide immediately back down to the bottom, such that you can never
// submit the dialog to get out.
function setupSisyphus() {

  let $sisyphusDialog = $('#sisyphus-dialog');

  // Set up  the icon
  let $sisyphusIcon = $('#sisyphus-icon');
  if (!touchBased) $sisyphusIcon.draggable();
  $sisyphusIcon.on('dblclick touchend',function() {
    if (phone) {
      $('#app-background').fadeIn(1000,function () {
        $sisyphusDialog.dialog('open');
      });
    }
    else {
      $sisyphusDialog.dialog('open');
    }
  });

  // Create the dialog to house the "app"
  $sisyphusDialog.dialog({
    resizable: false,
    draggable: !phone,
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
    position: {
      my: "center",
      at: getNewDialogPosition(),
      of: window
    },
    closeOnEscape: false,
    autoOpen: false
  });
  // Get rid of the 'x' button on the menu bar
  $sisyphusDialog.parent().find(".ui-dialog-titlebar-close").hide();

  // We disable the button at the start (the slider will start at 0)
  $('#sisyphus-submit').button('disable');

  if (phone) {
    $sisyphusDialog.dialog('option','width','90%');
  }

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
}
