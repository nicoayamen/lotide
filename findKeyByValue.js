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

module.exports = findKeyByValue;