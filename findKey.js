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
module.exports = findKey;

