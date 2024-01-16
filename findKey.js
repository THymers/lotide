const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const findKey = function (obj, callback) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (callback(obj[key])) {
        return key;
      }
    }
  }
  return undefined;
};
const result = findKey(
  {
    "Best Friends": { stars: 1 },
    "Good Times": { stars: 3 },
    best: { stars: 2 },
    ouBletr: { stars: 3 },
    wOw: { stars: 2 },
    Awesome: { stars: 3 },
  },
  (x) => x.stars === 2,
);

//tests
assertEqual(result, "best");
assertEqual(result, "wOw");
assertEqual(result, "Best Friends");
