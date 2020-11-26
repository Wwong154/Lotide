const assertEqual = function(actual, expected) {
  if (expected === undefined) {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const findKey = function(obj, callback) {
  let result = '';
  for (const items of Object.keys(obj)) {
    if (callback(obj[items])) {
      result = items;
      break;
    }
  }
  return result;
};
/*
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
*/

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'Akaleri');

assertEqual(findKey({
  "Blue Hill": 'stars',
  "Akaleri": 'bacon',
  "noma":  'sun',
  "elBulli":  'blackHole',
  "Ora":  'ice',
  "Akelarre":  'chair'
}, x => x === 'chair'), 'Akelarre');

