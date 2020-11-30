# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @feaovali/lotide`

**Require it:**

`const _ = require('@feaovali/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: console log either if the assertion of arrays fail or pass
* `assertEqual(actual, expected)`: console log either if the assertion of primative value fail or pass
* `assertObjectsEqual(actual, expected)`: console log either if the assertion of Objects fail or pass
* `countLetterss(string)`: count the amount of character in string, and return a object of {character : count}, will skip space
* `countOnly(Array, object)`: input a array of item, a object of either certain item should be count or not with boolean (default to false if not entered). Return a object of {item: count}; 
* `eqArrays(actual, expected)`: input 2 arrays, will return boolean if they are equal or not.
* `eqObject(actual, expected)`: input 2 Objects, will return boolean if they are equal or not.
* `findKey(object, callBack)`: input a list(object) and a callBack fn as criteria of the key that is being look for. return the key in String. 
* `findKeyByValue(object, Value)`: input a list(object) and the value that is being look for. return the key in String, return undefined if no paired key is found
* `flatten(array))`: input a nested array, return a flatten array.
* `head(array)`: return the content from the first index of the array, undefined if array is empty
* `letterPositions(String)`: Input a string, return a Object which log the index of each character appearance as an Object.{cha1: [index1, index2...], cha2...}
* `map(array, callBack)`: input a Array, and a callBack fn. return will be a array modified based on your callBack fn.
* `middle(array)`: input a array, return the middle value if the array length is odd, and middle 2 value if even. return empty array if the length is 2 or less
* `tail(array)`: input a array, return array without the first value in the original array. will return empty array if array length is 1 or less.
* `takeUntil(array, callBack)`: input a array and callBack fn as stop case, return a modified array base on original up until the case from callBack fn is matched. (exclud the matched case);
* `without(array, array)`: input 2 array, first the array that wished to be modified. Second a array of items that wished to be remove from the first array. return a modify array. (Please look out for data type)