
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


 
const countLetters = function(sentence) {
  const result = {};
  const string = sentence.split(' ').join('');

for(const letter of string) {
    if (result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1
    }
  }
  return result;
};

console.log(countLetters('Lighthouse in the house'))
