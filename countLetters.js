const assertEqual = function(actual, expected) {
  if (expected === undefined) {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
const countLetters = function(input) {
  let holder = input.split(" ").join("");
  let result = {};
  for (let letters of holder) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};
//test
console.log(assertEqual(countLetters("lighthouse in the house").e, 3));
