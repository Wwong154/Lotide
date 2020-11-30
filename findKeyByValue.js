const findKeyByValue = function(Obj, value) { // assume same value can only assign to 1 key
  for (let key in Obj) {
    if (Obj[key] === value) {
      return key;
    }
  }
  return undefined;
};
module.exports =findKeyByValue;