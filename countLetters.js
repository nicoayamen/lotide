const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {
  let obj = {};
  for (const chars of string) {
    // to not include spaces and only count and add letters. if it includes a space, it will not be added.
    if (chars !== " ") {
      // to check if a letter exists in obj, if it does add 1
      if (obj[chars]) {
        obj[chars] += 1;
        // if a new letter comes into obj, set to 1
      } else {
        obj[chars] = 1;
      }
    }
  }
  return obj;
};

const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

const result2 = countLetters('Lighthouse Labs');
assertEqual(result2['L'], 2);
assertEqual(result2['i'], 1);
assertEqual(result2['g'], 1);
