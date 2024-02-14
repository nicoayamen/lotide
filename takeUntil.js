const takeUntil = function(arr, call) {
  const results = [];
  for (item of arr) {
    if (call(item) === false) {
      results.push(item);
    } else {
      break;
    }
    
  }
  return results;
};

module.exports = takeUntil;