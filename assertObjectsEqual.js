const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const eqObjects = require("./eqObjects");

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
