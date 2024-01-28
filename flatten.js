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
    console.log(`Assertion Failed: ${a} !== ${b}`)
  } else {
  console.log(`Assertion Passed: ${a} === ${b}`);
  }
}

const flatten = function(a) {
  let newArr = [];
  for (element of a) {
    // if element is array we concat element in newArr
    if (Array.isArray(element)) {
      newArr = newArr.concat(element);
    } else {
      // if it isnt, push element to new arr
      newArr.push(element);
    }
  }
  // always return
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => [1, 2, 3, 4, 5, 6]
