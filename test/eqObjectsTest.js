const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true when compare {a:1, b:2}, {b:2, a:1}", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it("returns false when compare {a:1, b:2}, {a:1, b:2 , c:3}", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });
  it("returns true when compare object with array inside { c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });
  it("returns true when compare nested Object { a: { y:  {z: 1 }}, b: 2 }, { a: { y:  {z: 1 }}, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { y:  {z: 1 }}, b: 2 }, { a: { y:  {z: 1 }}, b: 2 }));
  });
});
