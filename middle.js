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

module.exports = middle;

