
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
    resizable: false,
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
