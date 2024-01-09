const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const countLetters = function (allLetters) {
  const results = {};
  for (const letter of allLetters) {
    if (!/[a-zA-Z]/.test(letter)) continue; // The semicolon from line 11 was removed
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters("this is the way to count letters");
assertEqual(result1["t"], 4);
assertEqual(result1["h"], 2);


