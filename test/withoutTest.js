const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2,3] when given [1,2,3] and without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2,3]);
  });
  it("returns ['1','2'] when given ['1', '2', '3'] and without [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1','2']);
  });
  it("returns [] when given 2 same array", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]), []);
  });
});