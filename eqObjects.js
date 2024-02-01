// returns true if both obj have identical keys and values
// else get a false baby
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const shirtObject = { color: "red", size: "medium" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  
  
  if (!eqArrays(arr1, arr2)) {
    return false;
  }
  
  
  for (key of arr1) {
    console.log("Hello");
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

  /*if (arr1.length !== arr2.length) {
    return false;
  } for (loop1 of arr1) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
      return eqArrays(arr1, arr2) == true;
    } else if (arr1[loop1] === arr2[loop1]) {
      return true;
    } else {
      return false;
    }
  } */
};

const example = {
  one: 2,
  fizz: 'buzz',
  buzz: true
};

const example2 = {
  fizz: 'buzz',
  one: 2,
  buzz: true,
  //talk: 'mentor'
};

const example3 = {
  fizz: 'notbuzz'
};
console.log("!!!", eqObjects(example, example2)); // Expect true
//console.log(eqObjects(example, example3)) // Expect false



//console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
//console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false