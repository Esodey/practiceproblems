// Alice wrote a sequence of words in CamelCase as a string of letters, s , 
// having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given s, print the number of words in s on a new line.

// For example, s = oneTwoThree. There are 3 words in the string. 

function camelCase(string) {
  let words = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      words++;
    }
  }
  return words + 1;
}

const result = camelCase('oneTwoThree');

console.log(result);