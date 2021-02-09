const submitBtn = document.querySelector('submitBtn');
const guessField = document.querySelector('guessField');
const guessResult = document.querySelector('#guessSelect');

/**
 * - Generates Number + store it
 * - Accepts input
 * - Parses input
 * - Compare input with number
 * 
 */

// Generator, random number in given range
let numGenerate = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
let numAnswer = numGenerate();

// keep track of previous guesses
let wrongAnswers = [];


// Compare number to the numAnswer
function compareNumber(userNum) {
  if (userNum == numAnswer) {
    // do win sequence
    return "";
  } else if (userNum > numAnswer) {
    return `lower than ${userNum}`;
  } else {
    return `higher than ${userNum}`;
  }
}

function userWin() {
  // Shouldn't allow any new inputs
  // Display congrats message
}

function parseInput(userInput) {
  // Must be a number, for now assume pure integers
  let userNum = parseInt(userInput);
  let message = "";
  
  if (Number(userNum)) {
    message = compareNumber(userNum);
  } else {
    message = `Invalid input, you gave me \"${userNum}\", give me an integer.`;
  }
  return message;
}

submitBtn.addEventListener('click', () => parseInput(guessField.value));
