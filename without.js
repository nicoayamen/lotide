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

const without = function(source, remove) {
  // newArr the array we will push to
  let newArr = [];
  // here we are looping thru source, using elements as a var to store. of loop loops in the elements not keys
  for (element of source) {
    // while loop is firing, check to see if remove array includes elements from source
    if (!remove.includes(element)) {
      // pushing to newArr. array that gets pushed to goes first
      newArr.push(element);
    }
  }
  

  return newArr;
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
