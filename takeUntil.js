const takeUntil = function(arr, call) {
  const results = [];
  for (item of arr) {
    // uses callback conitional here to push the item in func call to results arr
    if (call(item) === false) {
      results.push(item);
    } else {
      break;
    }
    
  }
  return results;
};

module.exports = takeUntil;