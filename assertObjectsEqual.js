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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }
}

const example = {
  fizz: 'buzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3]
};

const example2 = {
  fizz: 'buzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3]
};

const example3 = {
  fizz: 'buzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3]
};

const example4 = {
  fizz: 'buzzzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3]
};

const example5 = {
  fizz: 'buzzzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3]
};

const example6 = {
  fizz: 'buzzzz',
  one: 2,
  buzz: true,
  arr: [1, 2, 3],
  nom: "Kasha"
};

assertObjectsEqual(example, example2);
assertObjectsEqual(example3, example4);
assertObjectsEqual(example5, example6); 