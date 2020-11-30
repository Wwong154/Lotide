const assertArraysEqual = require('./assertArraysEqual')

const middle = function(inArr) {
  let result = [];
  if (inArr.length <= 2) {
    return result;
  }
  let midPoint = Math.floor(inArr.length / 2);
  if (inArr.length % 2 === 0) {
    result.push(inArr[midPoint - 1]);
    result.push(inArr[midPoint]);
  } else {
    result.push(inArr[midPoint]);
  }
  return result;
};
module.exports = middle;