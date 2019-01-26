$(document).ready(function () {
  $('div').dialog({
    buttons: {
      Yes: function () {
        $(this).dialog('close');
      }
    }
  });
});
