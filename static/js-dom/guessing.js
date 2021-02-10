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

/** */
// Generator, random number in given range
let numGenerate = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
// Variable for the random number
let numAnswer = numGenerate();

// keep track of previous guesses
// + avoid duplicates
let wrongAnswers = new Set();

// EVENT LISTENERS
submitBtn.addEventListener('click', userGuessed);
rangeBtn.addEventListener('click', setRange);


// Reset all variables
function resetGame() {

  guessResult.textContent = "";
  // + generate new number for numAnswer
  numAnswer = numGenerate();
}

// Handle's users input
function userGuessed() {
  let userInput = parseInput(guessField.value);
  // do nothing if number not entered
  if (!userInput) return;

  // Parse the input, 
  let results = checkNumber(userInput);
  guessPrev.textContent = [...wrongAnswers].join(", ");

  guessResult.textContent = results;
}

// Compare number to the numAnswer
function checkNumber(userNum) {
  // Correct answer given
  if (userNum == numAnswer) {
    // do win sequence
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


function userWin() {
  // Shouldn't allow any new inputs
  // Display congrats message
}


function setRange() {
  let min = parseInput(minRange.textContent);
  let max = parseInput(maxRange.textContent);
  // For now, assume user must input both
  resetGame();
  numAnswer = numGenerate(min, max);
}

