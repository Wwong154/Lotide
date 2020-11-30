const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1, 11] when ask for i from 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });
  it("returns undefined when ask for non-existing letter", () => {
    assert.deepEqual(letterPositions("hello").z, undefined);
  });
});