const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;