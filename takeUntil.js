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

const assertArraysEqual = function(a, b) {
  if (!eqArrays(a, b)) {
    console.log(`Assertion Failed: ${a} !== ${b}`)
  } else {
  console.log(`Assertion Passed: ${a} === ${b}`);
  }
}

const takeUntil = function(arr, call) {
  const results = [];
  for (item of arr) {
    if (call(item) === false) {
      results.push(item);
    } else {
      break;
    }
    
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

/* [ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/