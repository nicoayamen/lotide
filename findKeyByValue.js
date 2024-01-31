const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(genres, show){
  // since returning a key, which is a string results must be undefined
  let result = undefined;
  // use in to loop over obj keys
  for (const genre in genres) {
    // if the show we are looking for exists in the genres obj return the key of the valuse
    if (show === genres[genre]) {
        result = genre;
        break;
    }
  }
  return result;
};






// test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);