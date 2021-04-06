const assertArraysEqual = require('./assertArraysEqual')



const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};


module.exports = middle;


//[1, 2, 3, 4] // (4/2) -1, 4/2 = 1,2 = 2,3
//[1, 2, 3, 4, 5, 6] // (6/2) -1, 6/2 = 2,3 = 3,4
//[1, 2, 3] // 3-1 = 2/2 = 1 = 2
//[1, 2, 3, 4, 5] // 5 -1 = 4/2 = 2 =3
// TEST CODE