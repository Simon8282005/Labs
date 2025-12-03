function playGame() {
    // generate a random interger between 1 and 10
    /**
     * Math.random generate random decimal from 0 - 1
     * Math.floow round Math.random() * 10 into nerest interger.
     */
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // prompt the use to guess the number
    // prompt function ask the user input
    const userGuess = parseInt(prompt("Guess a number between 1 and 10: "), 10);

    // Validate the user's input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        alert("Good Work! You guessed it right.");
    } else {
        alert(`Not matched. The correct number was ${randomNumber}`);
    }
}