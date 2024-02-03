const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["mia", "Goes", "Brr"];
const words3 = ["kasha", "is", "so", "cute"];
const eqArrays = function(arr1, arr2) {
  // checks to see arrs do not have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; arr1.length > i; i++) {
    // checks to see if, as the arrs are looping, are not equal
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  // to break the func if all upper if dont trigger
  return true;
};

const assertArraysEqual = function(a, b) {
  if (!eqArrays(a, b)) {
    console.log(`Assertion Failed: ${a} !== ${b}`)
  } else {
  console.log(`Assertion Passed: ${a} === ${b}`);
  }
}

const map = function(arr, call) {
const results = [];
  for (item of arr) {
    results.push(call(item));
  }
  return results
}
const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'm', 'G', 'B' ]);
assertArraysEqual(results3, [ 'K', 'i', 's', 'c' ]);
