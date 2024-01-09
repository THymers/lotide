const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const countLetters = function (allLetters, lettersToCount) {
  const results = {};
  for (const letter of allLetters) {
    if (lettersToCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
};

const lettersToCount = { t: true, h: true, i: true, s: true };
countLetters("this is the way to count letters", lettersToCount);
