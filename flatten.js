const flatten = function(a) {
  let newArr = [];
  for (element of a) {
    // if element is array we concat element in newArr
    if (Array.isArray(element)) {
      newArr = newArr.concat(element);
    } else {
      // if it isnt, push element to new arr
      newArr.push(element);
    }
  }
  // always return
  return newArr;
}

module.exports = flatten;