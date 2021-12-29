"use strict"
let quotes = [
    `"It was like being in a foreign country" - Ian Rush when asked how was it to play for Juventus and the difficulties adjusting to life in Italy.`,
    `"I'm a firm believer if you score one goal, then the other team have to score two to win" - Howard Wilkinson.`,
    `"Well, Clive, it's all about the two M's... movement and positioning." - Ron Atkinson.`,
    `"Zero-zero is a big score" - Ron Atkinson.`,
    `"I never make predictions, and I never will." - Paul Gascoigne.`,
    `"I'd like to play for an Italian club, like Barcelona." - Mark Draper.`,
    `"Milan or Madrid - main thing: Italy!" - Andy Möller.`,
    `"I would not be bothered if we lost every game as long as we won the League." - Mark Viduka.`,
    `"Playing with wingers is more effective against a European side like Brazil than English sides like Wales." - Ronald Greenwood.`,
    `"Julian Dicks is everywhere. It's like they've got 11 Dicks on the field." - Unknown radio commentator in the 2004 Olympics.`,
    `"That was only a yard away from being an inch-perfect pass." - Murdo MacLeod.`,
    `"He’s not only a good player, but he’s spiteful in the nicest sense of the word." - Ron Atkinson.`,
    `"If history repeats itself, I should think we can expect the same thing again." - Terry Venables.`,
    `"I’d love to be a mole on the wall in the Liverpool dressing room at half-time." - Kevin Keegan.`,
    `"It’s headed away by John Clark, using his head." - Derek Rae.`,
    `"And now that the formalities are over, we’ll have the national anthems." - Brian Moore.`,
    `"He’s 21 this year. Last year he was 30." - David Coleman.`,
    `"Brazil... they’re so good it’s like they are running around the pitch playing with themselves." - John Motson.`,
    `"t’s sometimes easier to defend a one-goal lead than a two-goal lead." - Mark Lawrenson.`,
    `"If Glenn Hoddle had been any other nationality, he would have had 70 or 80 caps for England." - John Barnes.`,
    `"Not only has he shown Junior Lewis the red card, but he’s sent him off." - Chris Kamara.`,
    `"The Belgians will play like their fellow Scandinavians, Denmark and Sweden." - Andy Townsend.`,
    `"If he wants to play on his own, he can go and play tennis." - Louis van Gaal on Franck Ribéry.`,
    `"The local girls are far uglier than the ones in Belgrade. Our women are far prettier and they don't drink as much beer." - Georgi Hristov.`,
    `"It’s an incredible rise to stardom. At 17 you're more likely to get a call from Michael Jackson than Sven Goran Eriksson." - Gordon Strachan.`,
    `"When you are 4-0 up you should never lose 7-1." - Lawrie McMenemy.`,
    `"We must have had 99 percent of the game. It was the other three percent that cost us the match." - Ruud Gullit.`,
    `"I don't believe in superstitions. I just do certain things because I'm scared in case something will happen if I don't do them." - Michael Owen.`,
    `"I always used to put my right boot on first, and then obviously my right sock." - Barry Venison.`,
    `"Diouf is a master of the dark art of the winger. He draws you in, he sucks you off." - Garry Birtles on El Hadji Diouf.`,
    `"They're the second best team in the world, and there's no higher praise than that." - Kevin Keegan.`,
    `"That would’ve been a goal had it gone inside the post." - Michael Owen.`,
    `"We didn’t underestimate them. They were a lot better than we thought." - Bobby Robson.`,
    `"For those of you watching in black and white, Spurs are in the all-yellow strip." - John Motson.`,
    `"We go into the second half with United 1 - 0 up, so the game is perfectly balanced." - Peter Jones.`,
    `"Wilkins sends an inch perfect pass to no one in particular." - Byron Butler.`,
    `"Oh, he had an eternity to play that ball, but he took too long about it." - Martin Tyler.`,
    `"My wife doesn’t like football. One day she called me ten minutes before a game to find out where I was." - Peter Crouch.`,
    `"If Everton were playing down the bottom of my garden, I’d draw the curtains." - Bill Shankly.`,
    `"The thing about goalscorers is that they score goals." - Tony Cottee.`,
    `"Strangely, in slow motion replay, the ball seemed to hang in the air for even longer." - David Acfield.`,
    `"I don't think there is anybody bigger or smaller than Maradona." - Kevin Keegan.`,
    `"What will you do when you leave football, Jack, will you stay in football?" - Stuart Hall.`,
    `"A contract on a piece of paper, saying you want to leave, is like a piece of paper saying you want to leave." - John Hollins.`
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteGenerator').innerHTML = quotes[randomNumber];
}

// Invokes function on page load
newQuote();
