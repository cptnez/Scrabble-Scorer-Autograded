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
function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    letterPoints +=1
  }
	return (letterPoints);
 };
function vowelBonusScorer(word) {
	word = word.toUpperCase();
  let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
    if (word[i] == 'A') {
      letterPoints += 3;
    } else if (word[i] == 'E') {
      letterPoints += 3;
    } else if (word[i] == 'I') {
      letterPoints += 3;
    } else if (word[i] == 'O') {
      letterPoints += 3;
    } else if (word[i] == 'U') {
      letterPoints += 3;
    } else {
      letterPoints += 1;
    }
  }
	return (letterPoints);
};
let newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word) {
  word = word.toLowerCase();
  letterPoints = 0;
   for (let i = 0; i < word.length; i++) {
    for (const letter in newPointStructure) {
      if (letter == word[i]) {
        letterPoints += newPointStructure[letter];
      }
    }
  }
  return letterPoints;
 };
const scoringAlgorithms = [
  {
    name: 'Simple Scorer',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScorer
  },
  {
    name: 'Vowel Bonus Scorer',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScorer
  },
  {
    name: 'Scrabble Scorer',
    description: 'The traditional scoring algorithm.',
    scorerFunction: scrabbleScorer
  }
];
function scorerPrompt(arr) {
let word = input.question("Let's play some scrabble! Enter a word: ");
   console.log('Which scoring system do you want to use?');
   for (let i = 0; i < 3; i++){
      console.log(`-${arr[i].name}: ${arr[i].description}`)
   }
   let scoreChoice = input.question('Enter 0, 1, or 2: ');
   if (scoreChoice == 0) {
    return console.log(`Your word '${word}' received ${simpleScorer(word)} points.`);
   } else if (scoreChoice == 1) {
    return console.log(`Your word '${word}' received ${vowelBonusScorer(word)} points.`);
   } else if (scoreChoice == 2) {
    return console.log(`Your word '${word}' received ${scrabbleScorer(word)} points.`);
   } else {
    return input.question('Enter 0, 1, or 2: ');
   }
};
function transform(oldObj) {
  let newObj = {};
    for (const key in oldObj) {
        let points = oldObj[key];
      for (let i = 0; i < points.length; i++) {
          newObj[points[i].toLowerCase()] = Number(key);
      }
    }
return newObj;
};
function runProgram() {
  //  initialPrompt();
  scorerPrompt(scoringAlgorithms);
  // scrabbleScorer('javascript');
  // console.log(newPointStructure['q']);
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