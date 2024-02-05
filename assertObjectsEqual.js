const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqObjects = function (object1, object2) {
  const shirtOne = Object.keys(object1);
  const shirtTwo = Object.keys(object2);
  //check if the key arrays are the same length
  if (shirtOne.length !== shirtTwo.length) {
    return false;
  }
  for (const key of shirtOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(
      `👍👍 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    );
  } else {
    console.log(
      `👎👎 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`
    );
  }
};

module.exports = assertObjectsEqual;
