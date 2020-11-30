const countOnly = function(allItem, itemsToCount) {
  let result = {};
  for (let items of allItem) {
    if (itemsToCount[items]) {
      if (result[items]) {
        result[items] += 1;
      } else {
        result[items] = 1;
      }
    }
  }
  return result;
};
module.exports = countOnly;