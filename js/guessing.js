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

function parseInput(userInput) {
  // Must be a number, for now assume pure integers
  let userNum = parseInt(userInput);
  let message = "";
  
  if (isNaN(userNum) || typeof userNum != "number") {
    message = `Invalid input, you gave me \"${userNum}\", give me an integer.`;
  } else {
    // Call a compareNumber function
    message = "";
  }
  return message;
}

// Compare number to the numAnswer
function compareNumber(userNum) { }

