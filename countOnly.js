const countOnly = function(allItems, itemsToCount) {
  // obj to store results
  results = {};
  // to look for values generated
  for (names of allItems) {
    // Check if the current item should be counted (based on itemsToCount object)
    if (itemsToCount[names] == true) {
       // If the item is already in the results, increment its count
      if (results[names]) {
        results[names] += 1;
      } else {
         // If the item is not in the results, add it with a count of 1
        results[names] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;