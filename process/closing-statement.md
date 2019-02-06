# _Let's Play: Ancient Greek Punishment: UI Edition_ Closing Statement

## Reading the commit history:
- The game started with the codebase for the Love game, in order to get the CSS mostly, this did end up being emblematic of some struggles in terms of the purpose being more UI versus more Myth [af5d5cf](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/af5d5cf1dd554a1cf2b6964404c0e5e0995fa267)
- The need to remove usability elements baked into aspects of the technology like the ability to click on the slider body and pips to set its value (removing effort) [47a13ab](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/47a13abbc2fcb158401a90a81fc961c604c60461)
- More on usability later in reactions to Twitter where people responding by suggesting keyboard shortcuts as a way to escape the punishment, platform for comedy [5cf58cd](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/5cf58cd47e5293007334cbce71c47dc53014a69c)
- Initial version of Danaids as underwhelming, issues of coherence (desktop metaphor not a fit for the UI aesthetics of the game) and similarity (reversion of file looks like Sisyphus - though this led to questions about the similarity of all of them... action and reversion being thematic in some cases, inaction in others? - but a desire to treat the game as a platform for experimentation) [5cf58cd](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/5cf58cd47e5293007334cbce71c47dc53014a69c)
- Tantalus (and Sisyphus) examples showing a kind of physical mirroring of the mythological action - in Tantalus you "reach" (with the mouse) for the food/water only to find it's unavailable (out of reach). Likewise with Sisyphus you "push" (drag) the slider to the top, only to see it "roll" (slide) back down again. [5cf58cd](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/5cf58cd47e5293007334cbce71c47dc53014a69c)
- Fretting about quite small details because it's UI design? E.g. the appearance of th epeck dialog in Prometheus caused me a surprising amount of angst [7fe2657](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/7fe2657bf3f97c4759ccf49c58f701022ead4e87), issues around consistency and efficiency in relation to aesthetics.
- Instruction as disable item in the menu for Tantalus: it is a traditional way of representing these kinds of menus (it's even in one of the [jQuery UI examples for this kind of thing](https://jqueryui.com/selectmenu/#default) though there it has two layers of title/question/instruction). It's also helpful because it evades the problem of what to display in the menu by default: you can't have apple or water selected, so I'd had a "none" option, but you shouldn't really be _choosing_ to eat nothing, it should be forced on you, so this meant that the instruction itself is the default (disabled) selection. [84eec14](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/84eec1449815d3867bd9ae695054d097f5eee979)
- Zeno development (not reflected in actual code) from the idea of recursive elements (e.g. hierarchical menus) to a wizard. Recursion versus a kind of linear infinity?
- Pleasure with Zeno of the language game of the dual meaning of step from UI and running [bb9a275](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/bb9a27571df4d0e9a9f07d3dbe0136f4f53ba4bd)
- Danaids shift to radio buttons. Discussion of how the physical metaphor makes a distinction from Sisyphus - continuous versus discrete. At this point it was the use of mouse out before running into the mobile problem. [66f38ae](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/66f38ae2ee88165158a36712852f078ccba74726)
- Addition of Welcome screen to Zeno came from looking at images of Wizards online to get a better sense of their aesthetics, particularly due to feeling that the initial step of Zeno is underwhelming if it's the first thing you see - somehow doesn't set itself up as well as the others because it's so blunt and clear. The welcome screen as something that detunes that and sets expectations, allows for further jokes in language (steps to reach a goal) [8163eff](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/8163eff94408078046b53ece8cd754abc2a3ec4e)
- Sigma notation in Zeno is a huge moment (for me) just in terms of comedy and the pleasure of making games and including ideas that are somewhat hidden but just make so much sense and respond to perceived retorts to a game (reminds me of doing philosophy more than anything), a game of cat and mouse with a player in some sense (a player who knows about the precision of JavaScript numbers). [ac9f78d](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/ac9f78dab699ad21f27f7609515fe820ee7577c1)
- In the same commit, the calculation of how long it would take to exhaust the Sigma version of the game (I should do it again). But also the acknowledgement that I do need a response at that point (and it can't be another counter) in order to live up to the bargain made with the sigma stuff. [ac9f78d](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/ac9f78dab699ad21f27f7609515fe820ee7577c1) Implemented in [982e66a](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/982e66a5556cd87d78dc8a6b3738f48d3fd1f928)
- Removal of Previous in Zeno as a practical idea to get away from what would happen if you reversed out of the textual versions (which is pretty hilarious since that would never happen in, literally, a million years). On Rilla's suggestion. Removing it feels right anyway, it doesn't make sense (in this punishment context) to allow Zeno/the player to go back. You can't go back. [982e66a](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/982e66a5556cd87d78dc8a6b3738f48d3fd1f928)
- The journey to mobile. It's a suitable project for it. It's worth getting it working. Thus added the idea of single app (rather than desktop metaphor) [d6afd28](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/d6afd28c93178ab164a482344251e96bd8c0f64b)
- Added Half-Full to Danaids for added animation and in order to be able to see the animation when on mobile since discovering the mouse out wouldn't work. Good example of practicalities trumping other decisions and then often turning out to be better? [802e0b3](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/802e0b3ce97805bed901574a1deb9ff9633fb23c)
- Language passes. Decision between studied neutrality of UI language and Myth language. What is the core idea being represented? Is it the idea of the UI itself as a form of punishment, or it is the idea of representing narrative myths in the form of UIs? Went with the latter. [69ea7fe](https://github.com/pippinbarr/lets-play-ancient-greek-punishment-ui-edition/commit/69ea7fef9644cc622f0516ea3032725b1c757dbd)

## Reading the process journal
- Holy fuck I write a lot about process
- Wondering now whether the "closing statement" even makes sense as opposed to a series of shorter writings that tackle thematic areas? Like I'd rather have four 500-word things than one giant essay? And I'm sure that's representable in some way in the process language? Auto-analysis? Closing statements? Reflections? The Way We Were?
- Origin story is important with the Sisyphus idea. Particularly going from diagonal to flat, from literal to UI, but also trying? not to go too far to UI
- Realisation of the idea of buttons and dialogs early on in first design entry, the whole thing of simple games being plausible to just simulate in your head
- Early preoccupation with physical analogues (e.g. Sisyphus, even when horizontal, still claimed to have the feeling of pushing up a hill)
- Danaids fretting about the file representation not necessarily representing the idea of the water pouring out, but rather than you can't put it in. Early concerns about the relationship of UI and myth, precision wanted. Good example of this.
- Nice to see in the first version fairly liberal imagination (e.g. Tantalus is all over the place to start with) and a willingness to engage on the different UI elements on face value to see what they might achieve
- Initial Zeno as recursive, something that changes significantly
- Hints at a much more narratrive version "Welcome to Hades"
- Early concerns about mobile, this is one thing that starts to shift the needle on Zeno
- Very modular project, with detailed thinking about each individual thing followed by higher level consistency stuff (not always resolved, like language)
- The need to create Danaids to realise how it doesn't work or feel right, the reluctance to give up on it because it's hard to think of new ideas, looking for related analogs like the Windows file copying animation
- Thoughts on usability - the classic game thing of a usabile game providing usability on one vector while being "unusable" on another (making things hard). This throws an even more intense light on this? It needs to be usably unusable? See "Usability and Punishment", also thinking about Usability as Punishment.
- The thoughts on the submission button are quite good and "subtle" (can I say that about myself?)
- Danaids is kind of a story all its own?
- Sound and its abandonment
- The moment of research for Zeno when looking at Wizards and welcome messages
- Mobile thinking. Kind of boring? I don't think I view it as an essentially interesting part of the projet.
- Timer Danaids as "truer" than mouse out
- Big discussion of language in here
-

## Thoughts on themes:
- UI versus Myth priority (language aspect here?, distinctions between different games - Sisyphus more UI, Tantalus more myth?)
- Usability
- Practicalities as design decisions
- The original referents (in icons, background colours, language)

There are probably more. Come back to it later.
