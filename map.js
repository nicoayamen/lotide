const map = function(arr, call) {
const results = [];
  for (item of arr) {
    results.push(call(item));
  }
  return results
}

module.exports = map;