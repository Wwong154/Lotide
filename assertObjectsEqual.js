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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // if key amount/length is not equal go riught to false
    for (let key in object1) { // for loop through 1 of the object
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // if value is array, use array check
        if (!eqArrays(object1[key], object2[key])) { // if array not equal, return false
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) { //check primitive data type
          return false;
        }
      }
    }
    return true; // all is equal
  }
  return false;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (expected === undefined) {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  if (eqObjects(actual, expected) === false) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false