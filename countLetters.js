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

module.exports = countLetters;