const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 3 for ('lighthouse in the house').e", () => {
    assert.strictEqual(countLetters("lighthouse in the house").e, 3);
  });
  it("returns 2 for ('lighthouse in the house').i", () => {
    assert.strictEqual(countLetters("lighthouse in the house").i, 2);
  });
});
