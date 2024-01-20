const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//tests
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
