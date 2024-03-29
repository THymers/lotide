const assertEqual = require("./assertEqual");

const countLetters = function (allLetters) {
  const results = {};
  for (const letter of allLetters) {
    if (!/[a-zA-Z]/.test(letter)) continue;
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
