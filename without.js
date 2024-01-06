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
const without = function(array, remove) {
  const removedItems = [];
  for (let i = 0; i < array.length; i++) {
    if (!remove.includes(array[i])) {
      removedItems.push(array[i]);
    }
  }
  return removedItems;
};


console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"])); 

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
assertArraysEqual(without(["1", "2", "3"], [1, 2]), ["1", "2", "3"]);
