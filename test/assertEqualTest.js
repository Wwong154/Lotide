const expect = require('chai').expect;
require('mocha-sinon');
const assertEqual = require('../assertEqual');
describe("#assertEqual", () => {
  beforeEach(function() { // set temp value each time a function start for spying on console.log
    this.sinon.stub(console, 'log');
  });
  it("returns assertion pass when given 1,1", () => {
    assertEqual(1,1);
    expect(console.log.calledWith(`✅✅✅ Assertion Passed: 1 === 1`)).to.be.true;
  });
  it("returns assertion fail when given 1,2", () => {
    assertEqual(1,2);
    expect(console.log.calledWith(`🛑🛑🛑 Assertion Failed: 1 !== 2`)).to.be.true;
  });
});