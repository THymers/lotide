const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["test", "123"], ["test", "123"]), true);
assertEqual(eqArrays(["test", "123"], ["tes", "123"]), false);
