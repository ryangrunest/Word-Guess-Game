// Initialize Selectors
// Reset Button
var resetButton = document.querySelector("#reset");
// Instructions Button
var instructions = document.querySelector("#instructions");
// Span for guesses
var guesses = document.querySelector("#guesses");
// element for word being guessed
var word = document.querySelector("#guessed-word");

// array storing possible random words
var lyrics = ["ground", "control", "major", "tom", "protein", "commencing", "planet",];
// var storing random word from array of random words
var rand;
// Initialize Counter for guesses 
var countGuesses;
// initialize empty string to store guessed numbers
var wordHolder;




// VARIABLES
// load a new word
function loadWord() {
	rand = lyrics[Math.floor(Math.random() * lyrics.length)];
	// reset ui
	word.innerHTML = "";
	// loop through word and add correct amount of "_" to ui
	for (var i = 0; i < rand.length; i++) {
	word.innerHTML = word.innerHTML + "_";
	// store correct number of "_" in variable to manipulate
	wordHolder = word.innerHTML;
	};
};

// reset game function
var resetGame = function() {
	// reset number of guesses
	countGuesses = 10;
	// update ui with number of guesses
	guesses.innerHTML = countGuesses;
	// select new random word to be guessed
	loadWord();
};
// END VARIABLES




// EVENT LISTENERS
// Listener for reset button
resetButton.addEventListener("click", function() {
	// reload page
	resetGame();
});

// Listener for instructions button
instructions.addEventListener("click", function() {
	// alert user instructions on how to play game
	alert("write some instructions");
});


// main program checking keydown event
document.onkeydown = function() {
	// checking if the character was a-z
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		// console.log(event.key);
		// counting guesses
		countGuesses--;
		// update ui for guesses
		guesses.innerHTML = countGuesses;
		// if user is out of guesses
		if (countGuesses <= 0) {
			// alert user they are out of guesses
			alert("You are out of guesses :(");
			resetGame();
		};
		// loop through to picked word
		for (var i = 0; i < rand.length; i++) {
			// if key pressed is equal to any characters in picked word
			if (event.key === rand.charAt(i)) {
				// alert(rand.charAt(i));
				// store key currently being pressed in variable
				var keyPressed = event.key;
				// negate the reduced counter, since guess was correct
				countGuesses++;
				// update UI for negated reduced counter
				guesses.innerHTML = countGuesses; {
				if (rand.charAt(i) === keyPressed) {
					// word.textContent.replace(word.textContent.charAt(i), event.key)
					wordHolder.indexOf(i) = keyPressed;
					};
				};
			};
		};
	};
};
// END EVENT LISTENERS


// onload
resetGame();

