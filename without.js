const without = function(source, remove) {
  // newArr the array we will push to
  let newArr = [];
  // here we are looping thru source, using elements as a var to store. of loop loops in the elements not keys
  for (element of source) {
    // while loop is firing, check to see if remove array includes elements from source
    if (!remove.includes(element)) {
      // pushing to newArr. array that gets pushed to goes first
      newArr.push(element);
    }
  }
  

  return newArr;
}

module.exports = without;