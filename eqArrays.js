const assertEqual = function(actual, expected) {
  if (expected === undefined) {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) { // if length not equal , then false
    return false;
  }
  for (let x in actual) {
    if (Array.isArray(actual[x])) { // check nested array
      if (!(eqArrays(actual[x], expected[x]))) return false; // call self upon nested, if false, then pass on the result
    } else if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};
/*
//test con
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/
assertEqual(eqArrays([[2, [3]], [4]], [[2, [3]], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

