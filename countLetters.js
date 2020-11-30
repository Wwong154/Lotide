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
module.exports = countLetters;
