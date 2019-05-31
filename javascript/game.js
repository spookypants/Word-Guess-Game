// Word array (planet themed)
var words = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "ceres", "makemake", "haumea", "eris"]

// Variables
var guessesRemaining = 10;
var winCounter = 0;
var lossCounter = 0;

// The Word Guess Game
function game() {

    // Player hits any key and starts the game

    
    // Comp selects a random word (aka planet)
    randomWord = words[Math.floor(Math.random() * words.length)];

    // Comp populates "_" for every letter of the word

    // Player hits key to guess

    // Comp checks player key against letters in word
        // If letter matches, guess again
        // If letter doesn't match, add guessed letter to array, guess again
        // For each guess, decrease guess counter
        
    // If all letters are guessed before the counter runs out, win
        // Display full word and image

    // If not all letters are guessed before the counter runs out, lose
        // Display "you are bad"
