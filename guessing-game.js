// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.
// Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.
// After a correct guess, the game ends.
// let game = guessingGame();
// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"

function guessingGame() {
    // Want to make sure the num is whole num  & random
    let secretNumber = Math.floor(Math.random() * 100);
    let guessCount = 0;

    return function guess(num) {
        // Increment the guess count
        guessCount++;
        if(secretNumber === null) {
            return "The game is over, you already won!";
        }
        // Check the guessed number & compare it to the num   
        if (secretNumber < num) {
            return `${num} is too high!`
        } else if (secretNumber > num) {
            return `${num} is too low!`
        } else {
            // If the guess is correct, end the game
            secretNumber = null;
            return `You win! You found ${num} in ${guessCount} guesses.`
        }
    }
}

module.exports = { guessingGame };
