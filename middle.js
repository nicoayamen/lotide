// func to show if two arrs have equal elements/length
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
    console.log(`Assertion Failed: ${a} !== ${b}`);
  } else {
    console.log(`Assertion Passed: ${a} === ${b}`);
  }
};

const middle = function(arr) {
  // if arr length has 3 or less elements, return just an empty arr
  if (arr.length <= 2) {
    return [];
    // if the arr length is odd
  } else if (arr.length % 2 === 1) {
    // returns the middle of an array that length is odd
    return [arr[Math.floor((arr.length - 1) / 2)]];
    // if arr length is even
  } else {
    // takes the middle point of an even array. 2 elements returned seperated by comma
    return [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);