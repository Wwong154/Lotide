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
const middle = function(inArr) {
  let result = [];
  if (inArr.length <= 2) {
    return result;
  }
  let midPoint = Math.floor(inArr.length / 2);
  if (inArr.length % 2 === 0) {
    result.push(inArr[midPoint - 1]);
    result.push(inArr[midPoint]);
  } else {
    result.push(inArr[midPoint]);
  }
  return result;
};

//test code
/*
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2]), []);
*/