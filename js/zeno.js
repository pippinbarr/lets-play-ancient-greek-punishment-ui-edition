
// Set up the Zeno app
//
// In Zeno you're asked to select a food or drink but when you open the
// menu both options are disabled. Most of this is actually in the HTML.

function setupZeno() {
  // Set up  the icon
  let  $zenoIcon = $('#zeno-icon');
  $zenoIcon.draggable();
  $zenoIcon.on('dblclick',function() {
    $zenoDialog.dialog('open');
  });

  let step = 0;

  let $zenoDialog = $('#zeno-dialog');

  // Create the dialog to house the "app"
  $zenoDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    // You can specify buttons as an array of objects to get finer-grained control
    // In this instance I want to assign an id for later reference
    open: function () {
      if (step === 0) {
        $('#zeno-step-text').hide();
        $('#zeno-welcome-text').show();
      }
      else {
        $('#zeno-step-text').show();
        $('#zeno-welcome-text').hide();
      }

      if (step === 0) {
        $('#zeno-previous').button('disable');
      }
      else {
        $('#zeno-previous').button('enable');
      }
    },
    buttons: [
      {
        id: "zeno-previous",
        text: "< Previous",
        click: function () {
          $(this).dialog('close');
          step -= (2 - step);
          $('#zeno-step').text(step);
          setTimeout(function () {
            $zenoDialog.dialog('open');
          },500);
        }
      },
      {
        id: "zeno-next",
        text: "Next >",
        click: function () {
          $(this).dialog('close');
          step += (2 - step)/2;
          $('#zeno-step').text(step);
          setTimeout(function () {
            $zenoDialog.dialog('open');
          },500);
        }
      }
    ]
  });

  // Get rid of the 'x' button on the menu bar
  $zenoDialog.parent().find(".ui-dialog-titlebar-close").hide();
}
