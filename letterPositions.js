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
const letterPositions = function(input) {
  let result = {};
  for (let index in input) {  // loop with index
    if (result[`${input[index]}`]) { // if key is avaliable , log index
      result[`${input[index]}`].push(Number(index));
    } else if (input[index] === ' '){ // if character is space, ingore
    } else { // log key that is not in result yet
      result[`${input[index]}`] = [Number(index)];
    }
  }
  return result;
};


//test
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("hello").e, [1]);
