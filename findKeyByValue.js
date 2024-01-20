const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  mystery: "The Mentalist",
  talk_show: "Oprah",
  late_night: "jimmy Kimmel"
};
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

