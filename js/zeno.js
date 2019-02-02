
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

  let step = 0; // The current step number (e.g. 1, 1.5, 1.75, ...) for the float representation
  let steps = -1; // The number of steps taken (e.g. 0, 1, 2, 3, 4, ...) for the Sigma expression
  // (It starts at -1 because the first step is when n=0)
  let sigma = false; // Whether we're displaying steps as sigma expressions

  let $zenoDialog = $('#zeno-dialog');

  // Create the dialog to house the "app"
  $zenoDialog.dialog({
    closeOnEscape: false,
    autoOpen: false,
    // You can specify buttons as an array of objects to get finer-grained control
    // In this instance I want to assign an id for later reference
    open: function () {
      if (step === 0 || steps === -1) {
        $('#zeno-step-text').hide();
        $('#zeno-welcome-text').show();
      }
      else {
        $('#zeno-step-text').show();
        $('#zeno-welcome-text').hide();
      }

      if (step === 0 || steps === -1) {
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
          steps--;
          step -= (2 - step);
          if (sigma) {
            setSigmaExpression(steps);
          }
          else {
            setNumberedStep(step);
          }

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
          steps++;
          step += (2 - step)/2;
          if (!sigma && step >= 2) {
            sigma = true;
          }

          if (sigma) {
            setSigmaExpression(steps);
          }
          else {
            setNumberedStep(step);
          }

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

function setSigmaExpression(steps) {
  let sigmaExpression = "\\( \\sum_{n=0}^{"+steps+"} (\\frac{1}{2})^n \\)"
  $('#zeno-sigma-expression').html(sigmaExpression);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"zeno-sigma-expression"]);

  $('#zeno-sigma-step').show();
  $('#zeno-numbered-step').hide();
}

function setNumberedStep(step) {
  $('#zeno-step').text(step);

  $('#zeno-sigma-step').hide();
  $('#zeno-numbered-step').show();
}
