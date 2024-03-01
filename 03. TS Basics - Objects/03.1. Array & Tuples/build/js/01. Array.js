"use strict";
// Array in TS
// Implicit
let arrString = ["Hello", "World", "Paper", "Pen", "Pencil"];
let arrStringNumber = [5, "Spongebob", 10, "Patrick"];
let arrMixed = ["I", "Wrote", 10, "Papers", true];
let arrStorageImplicit = [...arrString, ...arrStringNumber, ...arrMixed];
console.table(arrStorageImplicit);
// Explicit Array
let thisIsStringArray = ["Mouse", "Keyboard", "Scissors", "Calculator"];
let thisIsStringNumberArray = [5, "Spongebob", 10, "Patrick"];
let thisIsStringNumberArrayAlt = [1, "Mr. Crab", 1, "Plankton"];
let arrStorageExplicit = [...thisIsStringArray, ...thisIsStringNumberArray, ...thisIsStringNumberArrayAlt];
console.table(arrStorageExplicit);
// Tuples in TS
let tupStringNumber = ["Spongebob", 10];
let tupStringNumber_2 = [10, "Spongebob"];
// Look at the following. Weird isn't it?
tupStringNumber_2 = tupStringNumber;
/*
This error occurs because tupStringNumber only requires 3 values, but tupStringNumber_2 is a dynamic array. In short, TS prevent it
Type '(string | number)[]' is not assignable to type '[string, number]'

tupStringNumber = tupStringNumber_2;
*/ 
