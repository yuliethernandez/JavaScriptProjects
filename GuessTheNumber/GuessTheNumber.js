function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numGuessUser = 0;
  let number = prompt("Enter a number between 1 and 100.");
  if (number == null) {
    return 0;
  }
  numGuessUser++;
  if (number != null) {
    do {
      if (isNaN(number)) {
        number = prompt("Please enter a number.");
      } else if (number == null) {
        return 0;
      } else if (number >= 1 && number <= 100) {
        if (number < numToGuess) {
          number = prompt(`${number} is too small. Guess a larger number.`);
          numGuessUser++;
        } else if (number > numToGuess) {
          number = prompt(`${number} is too large. Guess a smaller number.`);
          numGuessUser++;
        } else if (number == numToGuess) {
          return numGuessUser;
        }
      }
    } while (numGuessUser <= totalGuesses);
    return 0;
  }
}
