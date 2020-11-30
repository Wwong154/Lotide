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

module.exports = eqArrays;