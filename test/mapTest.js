const assert = require('chai').assert;
const map = require('../map');
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,4,8,16,32];

describe("#map", () => {
  it("returns ['o','n','','j','m'] when ask for second letter of each word from ['ground', 'control' ...]", () => {
    assert.deepEqual(map(words, word => word[2]), ['o','n',undefined,'j','m']);
  });
  it("returns array , number eveything is * 2", () => {
    assert.deepEqual(map(numbers, x => x * 2), [2,4,8,16,32,64]);
  });
});
