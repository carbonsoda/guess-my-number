// GUESS INPUT
const submitBtn = document.querySelector('#submitBtn');
const guessField = document.querySelector('.guessField');
// GUESS OUTPUT
const guessResult = document.querySelector('#guessResult');
const guessPrev = document.querySelector('#guessPrev');

// OPTIONS
const minRange = document.querySelector('#minField');
const maxRange = document.querySelector('#maxField');
const rangeBtn = document.querySelector('#rangeBtn');

// EVENT LISTENERS
submitBtn.addEventListener('click', userGuessed);
rangeBtn.addEventListener('click', setRange);
resetBtn.addEventListener('click', resetGame);


// Variable for the random number
let numAnswer = numGenerate();

// keep track of previous guesses
// + avoid duplicates
let wrongAnswers = new Set();


// Generate random number in given range
function numGenerate(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Reset all variables
function resetGame() {
  // clear fields
  guessField.value = '';
  guessResult.textContent = '';
  guessPrev.textContent = '';
  
  guessField.disabled = false;
  submitBtn.disabled = false;

  // reset/regenerate variables
  wrongAnswers.clear();
  numAnswer = numGenerate();
}

// Handle's users input
function userGuessed() {
  let userInput = parseInput(guessField.value);
  // do nothing if number not entered
  if (!userInput) return;

  // Parse the input 
  let results = checkNumber(userInput);
  guessResult.textContent = results;

  guessPrev.textContent = [...wrongAnswers].join(", ");
}

// Return string, comparing userNum to the answer
function checkNumber(userNum) {
  // Correct answer given
  if (userNum == numAnswer) {
    // do win sequence
    userWin();
    return `exactly ${userNum}!`;
  } else {
    // Wrong answer given
    wrongAnswers.add(userNum);
    if (userNum > numAnswer) {
      return `lower than ${userNum}.`;
    } else {
      return `higher than ${userNum}.`;
    }
  }


}


// Parses user's input
function parseInput(userInput) {
  // do nothing if number not entered
  if (userInput.length < 1) return;

  let userNum = parseInt(userInput);

  if (Number(userNum)) {
    return userNum;
  }

  // form validates for Number
  // so this shouldn't be possible
  console.log(`Invalid userInput: ${userInput}`);
}

// Actions when user guesses correctly
function userWin() {
  // Shouldn't allow any new inputs
  guessField.disabled = true;
  submitBtn.disabled = true;

}

// Regenerate numAnswer based on entered range of nums
function setRange() {
  let min = parseInput(minRange.value);
  let max = parseInput(maxRange.value);
  // For now, assume user must input both
  resetGame();
  numAnswer = numGenerate(min, max);
}

