
const assertArraysEqual = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌Assertion Failed: ${arr1.length} !== ${arr2.length}`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`❌Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
    }
  }
  console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};


//[1, 2, 3, 4] // (4/2) -1, 4/2 = 1,2 = 2,3
//[1, 2, 3, 4, 5, 6] // (6/2) -1, 6/2 = 2,3 = 3,4
//[1, 2, 3] // 3-1 = 2/2 = 1 = 2
//[1, 2, 3, 4, 5] // 5 -1 = 4/2 = 2 =3
// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("Bootcamp", "Bootcamp");
//assertEqual(2, 1);
