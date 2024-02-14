const letterPositions = function(sentence) {
  let results = {};
  // looping this way to find index of element
  for (let i = 0; i < sentence.length; i++) {
    // skipping spaces. spaces will push element up an index btw
    if (sentence[i] !== " ") {
      // checks if the current character is already a key in the results object. If it is, it means we've encountered this letter before, and we add the current position i to the existing array associated with that letter.
      if (results[sentence[i]]) {
        //  If the current character is already in the results object, we push the current position i to the array associated with that character.
        results[sentence[i]].push(i);
      } else {
        // This line creates a new array with the current position i and assigns it to the results object with the current character as the key.
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;