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
const head = function(array) {
  return array[0];
};
/*
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);
assertEqual(head([]),);
*/