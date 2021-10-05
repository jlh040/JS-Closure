function guessingGame() {
  let target = Math.floor(Math.random() * 100);
  let hasWon = false;
  let count = 0;

  return function(guess) {
    if (hasWon) {
      return "The game is over, you already won!";
    }
    else if (guess < target) {
      count++;
      return `${guess} is too low!`;
    }
    else if (guess > target) {
      count++;
      return `${guess} is too high!`;
    }
    else {
      count++;
      hasWon = true;
      return `You win! You found ${target} in ${count} guesses.`
    }
  }
}

module.exports = { guessingGame };
