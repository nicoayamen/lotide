const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

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



// test obj
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// test the func
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);