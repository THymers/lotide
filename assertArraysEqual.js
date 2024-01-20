const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); 
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

assertArraysEqual(arr1, arr2); 
assertArraysEqual(arr1, arr3);

module.exports = assertArraysEqual