const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function (array, remove) {
  const removedItems = [];
  for (let i = 0; i < array.length; i++) {
    if (!remove.includes(array[i])) {
      removedItems.push(array[i]);
    }
  }
  return removedItems;
};

module.exports = without;
