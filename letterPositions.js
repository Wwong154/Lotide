const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let x in actual) {
    if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};


//test
letterPositions("hello")
