# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mken/lotide`

**Require it:**

`const _ = require('@mken/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: function that asserts if two arrays are equal
* assertEqual: function that asserts if two values are equal
* assertObjectsEqual: function that asserts if two objects are equal
* countLetters: function that returns the count of each letter in a string
* countOnly: function that takes items and returns the count for a specific subset of those items
* eqArrays: function that compares two arrays
* eqObjects: function that compares two objects
* findKey: function that scans the object and return the first key 
* findKeyByValue: function that searches for a key in an object where its value matches a given value
* head: function that retrieves the first element from the array
* index: list of all the functions in an object
* letterPositions: function that returns all the indices in the string where each character is found
* map: function that creates a new array with the results of calling a provided function on every element in the calling array
* middle: function that returns the middle element of an array
* tail: function that retrieves every element except the first element of an array
* takeUntil: function that returns a slice of the array with elements taken from the beginning
* without: function that removes elements from an array