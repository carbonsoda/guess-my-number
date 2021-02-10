const submitBtn = document.querySelector('.submitBtn');
const guessField = document.querySelector('.guessField');
const guessResult = document.querySelector('#guessResult');

// Generator, random number in given range
let numGenerate = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
// Variable for the random number
let numAnswer = numGenerate();

// keep track of previous guesses
let wrongAnswers = [];



// Reset all variables
function resetGame() {

  guessResult.textContent = "";
  // + generate new number for numAnswer
  numAnswer = numGenerate();
}


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
  let userNum = parseInt(userInput);
  let message = "";
  
  if (Number(userNum)) {
    message = compareNumber(userNum);
  } else {
    // form validates for Number, so this shouldn't be possible
    message = `Invalid input, you gave me \"${userNum}\", give me an integer.`;
  }
  return message;
}

// Handle's users input
function userGuessed(userInput) {
  // do nothing if number not entered
  if (userInput.length < 1) return;

  // Parse the input, 
  let results = parseInput(userInput);
  console.log(results);

  guessResult.textContent = results;
}

// Only works with the arrow function and in this placement
submitBtn.addEventListener('click', ()=> userGuessed(guessField.value));

