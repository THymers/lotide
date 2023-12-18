const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const head = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      return array[i];
    }
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");