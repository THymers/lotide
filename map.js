const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
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
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); 
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];
const calledWords = words.map(word => word);
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
//tests

const resultUppercase = map(words, word => word.toUpperCase());
assertArraysEqual(resultUppercase, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);


const resultLength = map(words, word => word.length);
assertArraysEqual(resultLength, [6, 7, 2, 5, 3]);





