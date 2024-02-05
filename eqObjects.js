const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  const shirtOne = Object.keys(object1);
  const shirtTwo = Object.keys(object2);
  //check if the key arrays are the same length
  if (shirtOne.length !== shirtTwo.length) {
    return false;
  }
  for (const key of shirtOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
