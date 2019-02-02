# Sisyphus

- ~~Get a dialog box with a slider in it~~
- ~~__LOOKS TOO WEIRD__ Try out the slider at a diagonal~~
- ~~Get a confirmation button going~~
- ~~Make the slider slide (lerp) back down when you release it~~
- ~~Make sure the instruction is clear~~
- ~~__DID IT IN CSS__ Look into the issue of clicking on a slider pip - basically just want to disable them~~
- ~~No closing the dialog ever~~
- ~~Have an icon on the desktop to launch the app~~

- Sound

# Danaids

- ~~Dialog box with a file and a folder~~
- ~~Set the file to revert when you drag it anywhere~~
- ~~Icon on the desktop~~
- ~~__NO, THE INSTRUCTION IS ALWAYS SO SIMPLE THAT IT CAN REMAIN PRESENT__ Should these things have an initial instruction in a dialog and thereafter none except for a "Help" button?~~
- ~~__NO, THE POINT ISN'T TO CONTROVERT THE BASICS OF USABILITY AND ACCESSIBILITY__ Or even no explanation at all so you have to get Help? (May be too obtuse?)~~
- ~~Have the folder highlight to at least show you're "succeeding in targeting it"?~~
- ~~__IT REALLY WAS, BUT I FIXED IT WITH RADIO BUTTONS__ Consider how this one might be a touch underdone right now~~
- ~~Implement as radio buttons "empty" and "full" so when you select full you can submit, but the option switches back to "empty" when you try. Hilarious.~~

- Sound

# Tantalus

- ~~Dialog box with a drop down with both options greyed out~~
- ~~Submit button that won't work if you haven't selected anything (maybe an error message?)~~
- ~~__THE SELECT MENU IS PRETTY PERFECT__ Also consider trying: checkboxes, radio buttons, disabled buttons at the bottom? All possible. Maybe make all of them launch at once as a way to just test which feels best?~~
- ~~Icon etc. for launching~~

- Sound

# Zeno

- ~~__NOT NEEDED BECAUSE THE WIZARD VERSION IS GREAT__ Look into recursive forms of the accordion~~
- ~~__NOT NEEDED BECAUSE THE WIZARD VERSION IS GREAT__ Look into recursive forms of the drop-down~~
- ~~Look into recursion via dialog boxes - an endless process - oh shit, like a series of steps! (Step 1 of 2, Step 1.5 of 2, Step 1.75 of 2!!!! Fuuuuuck, that's pretty good. Much easier to represent man.)~~
- ~~Implement "wizard version" with steps~~
- ~~__NOT THAT, BUT A WELCOME SCREEN__ Text generation (or something) for each step? It's a bit spare?~~
- ~~Add a welcome screen as the first step (step 0) that gives context to the rest, and the rest of the steps can be as they are I think~~
- ~~Look at restrictions on the precision of the float to make sure behaviour works if people really go for it~~
- ~~Add sigma expressions for when they exceed precision~~
- ~~Add textual expressions when they exceed maximum integer in the sigma expression!!!~~

- Sound

# Prometheus

- ~~Get the basic liver progress bar in a dialog~~
- ~~Peck dialog appears on top (maybe random location on screen for desktop?) and has a countdown timer for you to cancel it within (think about the language here as it's pretty awkward?)~~
- ~~__IT DOES__ Keep thinking about whether this one really works~~
- ~~Have each subsequent peck appear directly over the Prometheus dialog~~

- Language pass of course
- Sound

# Mobile

- ~~Mostly rely on the work done for Love and focusing on UI that is narrow. Limit it to one app at a time, possibly by faking a home screen instead of a desktop. This would mean needing to reload the page since you won't be able to exit any of these games. More thought probably required.~~
- ~~For mobile change activation of icons to single touch (e.g. like an app, also because dblclick doesn't seem to translate to mobile)~~
- ~~__ADDED A MESSAGE SHOULD WORK__ Do I need to worry about landscape mode? I would rather not - let's see how hideous it is (can always pop up a message telling them to stop it)~~
- ~~TRIGGERING ON BOTH DBLCLICK AND TOUCHEND SEEMS TO WORK WELL ENOUGH HERE__ Need to distinguish "touch" versus "click" for icon launch (e.g. ipad is not "mobile" but still requires single click not dbl)~~
- ~~The big question of whether on mobile we're just modally ONLY doing one app per (e.g. really live up to the app thing), or just let people run multiple punishments even on a little phone and screw the problems of screen realestate?~~
- ~~Disable draggable on mobile/touch icons? (It's a bit gross when they launch the app at the end of a drag)~~

- Alter Danaids design to allow touch only input (e.g. eliminate need for mouseout)
- Randomly position dialogs on non-phone devices for sexier aesthetics? Cluster in the center but position a bit more haphazardly?

# Bugs?

-  ~~__BECAUSE I WAS DISPLAYING MULTIPLE SPANS AND HIDING ONLY AFTER CREATING THE DIALOG WHICH CHANGED ITS POSITION CALCULATION__ Why the fuck does the first Zeno dialog always appear slightly higher than the subsequent ones? Eh?~~
