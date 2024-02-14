const eqArrays = require("./eqArrays")

const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  //console.log(arr1, arr2);

  // if the keys are equal,
  if (eqArrays(arr1.length, arr2.length)) {
    if (!eqArrays(arr1, arr2)) {
      return false;
    }
  }


  for (key of arr1) {
    //console.log("Hello");
    // cond 1 if the value is an array, and second val is an array, then we want to compare the arrays
    //if theyre not arrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      continue;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;