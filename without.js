const without = function(input, remove) {
  let result = [];
  let notToRemove = true;
  for (let x of input) {
    notToRemove = true;
    for (let y of remove) {
      if (x === y) {
        notToRemove = false;
        break;
      }
    }
    if(notToRemove) {
      result.push(x);
    }
  }
  return result;
};
const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  for (let x in actual) {
    if (actual[x] !== expected[x]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
// test case
/*
const words = ["hello", "world", "lighthouse"];
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/