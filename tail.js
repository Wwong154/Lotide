const assertEqual = function(actual, expected) {
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
const tail = function(array) {
  return array.slice(1);
};
/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
let a = [1];
console.log(tail(a));
a = [];
console.log(tail(a));
*/
