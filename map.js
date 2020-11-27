const assertArraysEqual = function(actual, expected) {
  if (expected === undefined) {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,4,8,16,32];
const even = [1,4,6,78,1032,55,93];
const results1 = map(words, word => word[2]);
assertArraysEqual(results1, ['o','n','','j','m']);
assertArraysEqual(map(numbers, x => x * 2), [2,4,8,16,32,64]);
assertArraysEqual(map(even, x => x % 2 === 0), [false, true, true, true, true, false, false]);