// Initialize Selectors
// Reset Button
var resetButton = document.querySelector("#reset");
// Instructions Button
var instructions = document.querySelector("#instructions");
// Span for guesses
var guesses = document.querySelector("#guesses");
// element for word being guesssed
var word = document.querySelector("#guessed-word");

// array storing possible random words
var lyrics = ["ground", "control", "major", "tom", "protein", "commencing", "planet",];
// var storing random word from array of random words
var rand = lyrics[Math.floor(Math.random() *  lyrics.length)];

// Counter for guesses 
var countGuesses = 10;
// reset game function
var resetGame = function() {
	countGuesses = 10;
	guesses.innerHTML = countGuesses;
	var rand = lyrics[Math.floor(Math.random() *  lyrics.length)];
}



// Listener for reset button
resetButton.addEventListener("click", function() {
	location.reload();
});

// Listener for instructions button
instructions.addEventListener("click", function() {
	alert("write some instructions");
});




// main program checking keydown event
document.onkeydown = function() {
	// checking if the character was a-z
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		// counting guesses
		countGuesses--;
		guesses.innerHTML = countGuesses;
		// if user is out of guesses
		if (countGuesses <= 0) {
		alert("You are out of guesses :(");
		resetGame();
		};
		word.innerHTML = rand;
	}

	
}

