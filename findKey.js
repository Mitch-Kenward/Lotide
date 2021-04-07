const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  let newArray = Object.keys(object);
  for (const key in newArray) {
    if (callback(object[newArray[key]])) {
      return newArray[key];
    }
  }
  return undefined;
};


let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let actual1 = findKey(object, x => x.stars > 1);
let expected1 = "Akaleri";
assertEqual(actual1, expected1);

let actual2 = findKey(object, x => x.stars === -5);
let expected2 = undefined;
assertEqual(actual2, expected2);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), 'Blue Hill');

module.exports = findKey;