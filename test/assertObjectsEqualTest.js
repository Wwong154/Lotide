const expect = require('chai').expect;
require('mocha-sinon');
const assertObjectsEqual = require('../assertObjectsEqual');
describe("#assertObjectsEqual", () => {
  beforeEach(function() { // set temp value each time a function start for spying on console.log
    this.sinon.stub(console, 'log');
  });
  it("returns assertion pass when given identical object", () => {
    assertObjectsEqual({ a: "1", b: "2" },{ b: "2", a: "1" });
    expect(console.log.calledWith(`✅✅✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }`)).to.be.true;
  });
  it("returns assertion fail when given different object", () => {
    assertObjectsEqual({ a: "1", b: "2" },{ a: "1", b: "2", c: "3" });
    expect(console.log.calledWith(`🛑🛑🛑 Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }`)).to.be.true;
  });
});