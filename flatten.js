const flatten = function(input) {
  let result = [];
  for (let x of input) {
    if (Array.isArray(x)) {
      result = result.concat(flatten(x)); //call flatten to flatten the nested array, use result.concat to let the previous result stay
    } else {
      result.push(x);
    }
  }
  return result;
};
module.exports = flatten;