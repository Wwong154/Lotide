const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [2,1,3,4] from [[[2]],[1,3],4]", () => {
    assert.deepEqual(flatten([[[2]],[1,3],4]), [2,1,3,4]);
  });
  it("returns [2,1,3,4] from [2,1,3,4]", () => {
    assert.deepEqual(flatten([2,1,3,4]), [2,1,3,4]);
  });
});
