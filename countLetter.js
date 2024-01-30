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
      const letters = chars.toLowerCase();
      // to check if a letter exists in obj, if it does add 1
      if (obj[letters]) {
        obj[letters] += 1;
        // if a new letter comes into obj, set to 1
      } else {
        obj[letters] = 1;
      }
    }
  }
  return obj;
};