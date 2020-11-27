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
  if (Object.keys(object1).length === Object.keys(object2).length) { // if key amount/length is not equal go right to false
    for (let key in object1) { // for loop through 1 of the object
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // if value is array, use array check
        if (!eqArrays(object1[key], object2[key])) { // if array not equal, return false
          return false;
        }
      } else if (typeof object1[key] === 'object' || typeof object2[key] === 'object'){
          if (!(eqObjects(object1[key], object2[key]))) return false; // recursive to handle object
      } else {
        if (object1[key] !== object2[key]) return false; //check primitive data type
      }
    }
    return true; // all is equal
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
assertEqual(eqObjects({ a: { y:  {z: 1 }}, b: 2 }, { a: { y:  {z: 1 }}, b: 2 }), true) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
