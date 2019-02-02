
// Set up the Prometheus app
//
// In Prometheus you're asked to select a food or drink but when you open the
// menu both options are disabled. Most of this is actually in the HTML.
function setupPrometheus() {
  // Set up  the icon
  let  $prometheusIcon = $('#prometheus-icon');
  if (!touchBased) $prometheusIcon.draggable();
  $prometheusIcon.on('dblclick touchend',function() {
    if (phone) {
      $('#app-background').fadeIn(1000,function () {
        $prometheusDialog.dialog('open');
      });
    }
    else {
      $prometheusDialog.dialog('open');
    }
  });

  let $prometheusDialog = $('#prometheus-dialog');

  // Create the dialog to house the "app"
  $prometheusDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    resizable: false,
    draggable: !phone,
    open: function () {
      setTimeout(function () {
        $peckDialog.dialog('open');
      },4000);
    }
  });
  // Get rid of the 'x' button on the menu bar
  $prometheusDialog.parent().find(".ui-dialog-titlebar-close").hide();
  if (phone) {
    $prometheusDialog.dialog('option','width','90%');
  }
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
    draggable: false,
    resizable: false,
    position: {
      my: "center",
      at: "center",
      of: $prometheusDialog
    },
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
  if (phone) {
    $peckDialog.dialog('option','width','90%');
  }
}
