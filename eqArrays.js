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

module.exports = eqArrays;

