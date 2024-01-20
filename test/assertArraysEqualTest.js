const assertArraysEqual = require('../assertArraysEqual');


//tests
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

assertArraysEqual(arr1, arr2); 
assertArraysEqual(arr1, arr3);