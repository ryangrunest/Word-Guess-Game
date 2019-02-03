// Initialize Selectors
// Reset Button
var resetButton = document.querySelector("#reset");
// Instructions Button
var instructions = document.querySelector("#instructions");



// Listener for reset button
resetButton.addEventListener("click", function() {
	location.reload();
});

// Listener for instructions button
instructions.addEventListener("click", function() {
	alert("write some instructions");
});

document.onkeydown = function() {
	alert("key pressed");

}
