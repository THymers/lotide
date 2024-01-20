const tail = require('../tail');
const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("should not modify the original array ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("should return [] for ['test']", () => {
    assert.deepEqual(tail(["test"]), []);
  });

  it("should return [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
