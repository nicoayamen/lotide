const tail = require('../tail')
const assertEqual = require('../assertEqual')







//test case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labss"); // ensure second element is "Labs"

//test case 2
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(words); //checking to see original array
console.log(tail(words)); // checking return in new array
assertEqual(words.length, 3); // original array should still have 3 elements!

// test case 3
assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty