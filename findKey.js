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
const result1 = findKey(
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
const result2 = findKey(
  {
    "Best Friends": { stars: 1 },
    "Good Times": { stars: 3 },
    best: { stars: 2 },
    ouBletr: { stars: 3 },
    wOw: { stars: 2 },
    Awesome: { stars: 3 },
  },
  (x) => x.stars === 3,
);const result3 = findKey(
  {
    "Best Friends": { stars: 1 },
    "Good Times": { stars: 3 },
    best: { stars: 2 },
    ouBletr: { stars: 3 },
    wOw: { stars: 2 },
    Awesome: { stars: 3 },
  },
  (x) => x.stars === 1,
);
//tests
assertEqual(result1, "best");
assertEqual(result2, "wOw");
assertEqual(result3, "Best Friends");
