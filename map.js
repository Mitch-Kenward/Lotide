const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



let words = ["ground", "control", "to", "major", "tom"];
let wordOne = ["ground", "control", "to", "major", "tom"];
let wordTwo = ["send", "me", "to", "the", "darkside", "of", "the", "moon"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
//const results2 = map(wordTwo, word => word[0]);
const results3 = map(wordOne, word => word[0]);
assertArraysEqual(results1, results3);


module.exports = map;