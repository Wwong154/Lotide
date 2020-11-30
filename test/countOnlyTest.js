const assert = require('chai').assert;
const countOnly   = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
describe("#countOnly", () => {
  it("returns 1 for Jason when set to true", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true }).Jason, 1);
  });
  it("returns undefined for Karima when set to true but not contain in object", () => {
    assert.strictEqual(countOnly(firstNames, { "Karima": true }).Karima, undefined);
  });
  it("returns 2 for Fang when set to true", () => {
    assert.strictEqual(countOnly(firstNames, { "Fang": true }).Fang, 2);
  });
  it("returns undefined for Agouhanna when nothing is set", () => {
    assert.strictEqual(countOnly(firstNames, { }).Agouhanna, undefined);
  });
});

