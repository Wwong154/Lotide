const letterPositions = function(input) {
  let result = {};
  for (let index in input) {  // loop with index
    if (result[`${input[index]}`]) { // if key is avaliable , log index
      result[`${input[index]}`].push(Number(index));
    } else if (input[index] === ' ') { // if character is space, ingore
    } else { // log key that is not in result yet
      result[`${input[index]}`] = [Number(index)];
    }
  }
  return result;
};
module.exports = letterPositions;