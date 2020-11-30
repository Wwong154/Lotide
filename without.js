const without = function(input, remove) {
  let result = [];
  let notToRemove = true;
  for (let x of input) {
    notToRemove = true;
    for (let y of remove) {
      if (x === y) {
        notToRemove = false;
        break;
      }
    }
    if (notToRemove) {
      result.push(x);
    }
  }
  return result;
};
module.exports = without;