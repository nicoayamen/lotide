# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @blufuu/lotide`

**Require it:**

`const _ = require('@blufuu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts that an array will truthy or not using eqArrays
`eqArrays`: checks to see if two arrays are strictly equal
* `assertEqual`: asserts an actual, expected value. only use for primitive
* `assertObjectEquals`: asserts two objects to be equal or not. uses eqObjects to check
* `eqObjects`: checks to see if two objects are strictly equal
* `countLetters`: counts and returns the number of letters in an object
* `countOnly`: checks an obects to see what values to keep track of by passing on itemsToCount object
* `findKey`: using a callback to find the key in an object
* `findKeyByValue`: same as findKey but will find the key of an object by value, if it exists in the object
* `flatten`: flattens an array to a single level
* `head`: returns the 0 index value of an array
* `letterPosition`: checks to see what index value is a letter in a string, and returns it to an object
* `middle`: returns the middle value (or values) of an array
* `tail`: returns the all the values of an array after 0
* `takeUntil`: pushes values into a new array until it reaches the specified index 
* `without`: returns a new array, without value specified
* `map`: returns an element based on parameter callback


