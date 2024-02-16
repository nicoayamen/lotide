const map = function(arr, call) {
const results = [];
// loops thru the key of input arr and pushes it to results using callback
  for (item of arr) {
    results.push(call(item));
  }
  return results
}

module.exports = map;