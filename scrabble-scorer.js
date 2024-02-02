// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let answer;
function initialPrompt() {
   let response = input.question("Let's play some scrabble! Enter a word: ");
   answer = simpleScorer(response);
   return console.log(answer);
};

let simpleLetters = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simpleLetters) {
 
		 if (simpleLetters[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

 let vowelLetters = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelLetters) {
 
		 if (vowelLetters[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };


let scrabbleScorer;

let simpleScorerObject = {
   name: '0) Simple Scorer',
   description: 'Each letter is worth 1 point.',
   scoringFunction: 'simpleScorer'
  }
  
let vowelBonusScorerObject = {
  name: '1) Vowel Bonus Scorer',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: 'vowelBonusScorer'
}

let oldScrabbleScorerObject = {
  name: '2) Old Scrabble Scorer',
  description: 'The traditional scoring algorithm.',
  scoringFunction: 'oldScrabbleScorer'
}
const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, oldScrabbleScorerObject];

function scorerPrompt(arr) {
let word = input.question("Let's play some scrabble! Enter a word: ");
   console.log('Which scoring system do you want to use?');
   for (let i = 0; i < 3; i++){
      console.log(`-${arr[i].name}: ${arr[i].description}`)
   }
   let scoreChoice = input.question('Enter 0, 1, or 2: ');
   if (scoreChoice == 0) {
    return console.log(simpleScorer(word));
   } else if (scoreChoice == 1) {
    return console.log(vowelBonusScorer(word));
   } else if (scoreChoice == 2) {
    return console.log(oldScrabbleScorer(word));
   } else {
    return input.question('Enter 0, 1, or 2: ');
   }
};

function transform() {};

let newPointStructure;

function runProgram() {
  //  initialPrompt();
   scorerPrompt(scoringAlgorithms);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
