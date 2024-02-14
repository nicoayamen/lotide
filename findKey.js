const findKey = function(obj, call) {
  let result = undefined;
  for (key in obj) {
    if (call(obj[key])) {
      result = key;
      break;
    }
  }
  return result;
}

module.exports = findKey;