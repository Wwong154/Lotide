const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns nome(since she is the first with 2 stars) when looking through object with the value stars : 2", () => {
    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
  it("returns Akaleri when looking through object with the value stars : 3", () => {
    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3), 'Akaleri');
  });
  it("returns akaleri when looking through object with the value chair", () => {
    assert.equal(findKey({
      "Blue Hill": 'stars',
      "Akaleri": 'bacon',
      "noma":  'sun',
      "elBulli":  'blackHole',
      "Ora":  'ice',
      "Akelarre":  'chair'
    }, x => x === 'chair'), 'Akelarre');
  });
});


