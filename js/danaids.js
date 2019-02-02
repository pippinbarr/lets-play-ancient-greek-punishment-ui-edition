// Set up the Danaids app
//
// In Danaids (for now) you try to drag a file of water (an image)
// into a folder that represents the Bath, and it never succeeds, just
// reverting all your efforts.
function setupDanaids() {
  // Set up  the icon
  let  $danaidsIcon = $('#danaids-icon');
  if (!touchBased) $danaidsIcon.draggable();
  $danaidsIcon.on('dblclick touchend',function() {
    if (phone) {
      $('#app-background').fadeIn(1000,function () {
        $danaidsDialog.dialog('open');
      });
    }
    else {
      $danaidsDialog.dialog('open');
    }
  });

  let $danaidsDialog = $('#danaids-dialog');


  // Create the dialog to house the "app"
  $danaidsDialog.dialog({
    closeOnEscape: false,
    resizable: false,
    autoOpen: false,
    draggable: !phone,
    position: {
      my: "center",
      at: getNewDialogPosition(),
      of: window
    },
    buttons: [
      {
        id: "danaids-submit",
        text: "Submit",
        click: function () {
          console.log("This should not happen.");
        }
      }
    ]
  });
  $('#danaids-submit').button('disable');

  // Get rid of the 'x' button on the menu bar
  $danaidsDialog.parent().find(".ui-dialog-titlebar-close").hide();

  if (phone) {
    $danaidsDialog.dialog('option','width','90%');
  }

  $('.radio').checkboxradio();
  $('#danaids-radios').controlgroup();

  $('#radio-full').on('click',function() {
    $('#danaids-submit').button('enable');
  });
  $('#radio-empty').on('click',function() {
    $('#danaids-submit').button('disable');
  });
  $('#danaids-radios').on('mouseleave',function() {
    $('#danaids-submit').button('disable');
    $('#radio-empty').trigger('click');
  });

  // I'm triggering  this click on empty because I don't understand why but
  // without  it it displays a horrible little ^ icon in the radio button if
  // I let it default to checked from the beginning?
  $('#radio-empty').trigger('click');

}
