const expect = require('chai').expect;
require('mocha-sinon');
const assertArraysEqual = require('../assertArraysEqual');
describe("#assertArraysEqual", () => {
  beforeEach(function() { // set temp value each time a function start for spying on console.log
    this.sinon.stub(console, 'log');
  });
  it("returns assertion pass when given same array", () => {
    assertArraysEqual([1,2,3],[1,2,3]);
    expect(console.log.calledWith(`✅✅✅ Assertion Passed: 1,2,3 === 1,2,3`)).to.be.true;
  });
  it("returns assertion fail when given same array, but not store in same type of value", () => {
    assertArraysEqual([1,3],[1,'3']);
    expect(console.log.calledWith(`🛑🛑🛑 Assertion Failed: 1,3 !== 1,3`)).to.be.true;
  });
});
