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
let newPointStructure = (transform(oldPointStructure));

function scrabbleScorer(word) {
  word = word.toLowerCase();
  letterPoints = 0;
   for (let i = 0; i < word.length; i++) {
    for (const key in newPointStructure) {
      if (key.includes(word[i])) {
        letterPoints += newPointStructure[key];
      }
    }
  }
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
  //New object
  let newObj = {};
    for (const key in oldObj) {

      let pointsOne = oldObj[1];
      let pointsTwo = oldObj[2];
      let pointsThree = oldObj[3];
      let pointsFour = oldObj[4];
      let pointsFive = oldObj[5];
      let pointsEight = oldObj[8];
      let pointsTen = oldObj[10];

      for (let i = 0; i < pointsOne.length; i++) {
      newObj[pointsOne[i].toLowerCase()] = 1;
      }
      for (let j = 0; j < pointsTwo.length; j++) {
        newObj[pointsTwo[j].toLowerCase()] = 2;
        }
        for (let k = 0; k < pointsThree.length; k++) {
          newObj[pointsThree[k].toLowerCase()] = 3;
          }
          for (let l = 0; l < pointsFour.length; l++) {
            newObj[pointsFour[l].toLowerCase()] = 4;
            }
            for (let m = 0; m < pointsFive.length; m++) {
              newObj[pointsFive[m].toLowerCase()] = 5;
              }
              for (let n = 0; n < pointsEight.length; n++) {
                newObj[pointsEight[n].toLowerCase()] = 8;
              }
                for (let p = 0; p < pointsTen.length; p++) {
                  newObj[pointsTen[p].toLowerCase()] = 10;
                  }
      }
return newObj;
};
function runProgram() {
  //  initialPrompt();
  scrabbleScorer('javascript');
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