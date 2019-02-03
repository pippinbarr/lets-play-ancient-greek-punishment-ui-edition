
// Set up the Zeno app
//
// In Zeno you're asked to select a food or drink but when you open the
// menu both options are disabled. Most of this is actually in the HTML.

function setupZeno() {
  // Set up  the icon
  let  $zenoApp = $('#zeno-app');

  setupApp($zenoApp,'zeno');

  $zenoApp.on('dblclick touchend',function() {
    if (phone) {
      $('#app-background').fadeIn(1000,function () {
        $zenoDialog.dialog('open');
      });
    }
    else {
      $zenoDialog.dialog('open');
    }
  });

  let step = 0; // The current step number (e.g. 1, 1.5, 1.75, ...) for the float representation
  let steps = -1; // The number of steps taken (e.g. 0, 1, 2, 3, 4, ...) for the Sigma expression
  // (It starts at -1 because the first step is when n=0)
  let sigma = false; // Whether we're displaying steps as sigma expressions
  let plainText = false; // Whether we're displaying steps as just language

  let $zenoDialog = $('#zeno-dialog');


  // Create the dialog to house the "app"
  $zenoDialog.dialog({
    closeOnEscape: false,
    resizable: false,
    autoOpen: false,
    collision: 'none',
    draggable: !phone,
    position: {
      my: "center",
      at: getNewDialogPosition(),
      of: window
    },
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
    },
    buttons: [
      {
        id: "zeno-previous",
        text: "< Previous",
        click: function () {
          $zenoDialog.dialog('close');
          steps--;
          step -= (2 - step);
          if (sigma) {
            setSigmaExpression(steps);
          }
          else if (!plainText){
            setNumberedStep(step);
          }
          else {
            setTextStep(step);
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
          $zenoDialog.dialog('close');
          steps++;
          if (steps === Number.MAX_SAFE_INTEGER) {
            sigma = false;
            plainText = true;
          }
          else {
            step += (2 - step)/2;
            if (!sigma && step >= 2) {
              sigma = true;
            }
          }

          if (sigma) {
            setSigmaExpression(steps);
          }
          else if (!plainText){
            setNumberedStep(step);
          }
          else {
            setTextStep(step);
          }

          setTimeout(function () {
            $zenoDialog.dialog('open');
          },500);
        }
      }
    ]
  });

  if (phone) {
    $zenoDialog.dialog('option','width','90%');
  }

  $('#zeno-previous').button('disable');


  // Get rid of the 'x' button on the menu bar
  $zenoDialog.parent().find(".ui-dialog-titlebar-close").hide();
}

function setSigmaExpression(steps) {
  let sigmaExpression = "\\( \\sum_{n=0}^{"+steps+"} (\\frac{1}{2})^n \\)"
  $('#zeno-sigma-expression').html(sigmaExpression);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"zeno-sigma-expression"]);

  $('#zeno-sigma-step').show();
  $('#zeno-numbered-step').hide();
  $('#zeno-text-step').hide();
}

function setNumberedStep(step) {
  $('#zeno-step').text(step);

  $('#zeno-sigma-step').hide();
  $('#zeno-text-step').hide();
  $('#zeno-numbered-step').show();
}

function setTextStep(step) {
  $('#zeno-text-step').text(textSteps[Math.floor(Math.random() * textSteps.length)]);

  $('#zeno-sigma-step').hide();
  $('#zeno-numbered-step').hide();
  $('#zeno-text-step').show();
}


let textSteps = [
  "Almost there!",
  "Keep going!",
  "Just a few more steps!",
  "Don't give up!",
  "The end is in sight!",
  "You can do this!",
  "You're doing great!",
  "Keep stepping!",
  "One foot after the next!",
  "You've got this!",
  "Don't stop!",
  "Keep clicking \"Next\"!"
];
