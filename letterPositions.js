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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i]
    let indices = [];
    for (let j = 0; j < sentence.length; j++) {
      if (character === sentence[j]) {
        indices.push(j);
      }
    }
    if (!results[`${character}`]) {
      results[`${character}`] = indices
    }
  }
  return results;
};  
//console.log('&&&&....', letterPositions('HelloWorrrld'))



//console.log(assertArraysEqual(letterPositions("lighthouse in the house").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

module.exports = letterPositions;