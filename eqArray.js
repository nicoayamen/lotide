// assertion function to check if param actual and expected are strictly =
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArray = function(arr1, arr2) {
  for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
}

console.log(eqArray([1, 2, 3], [1, 2, 3]));
assertEqual(eqArray([1, 2, 3], [1, 2, 3]));