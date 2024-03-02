"use strict";
// Type Assertion
// It's like "Hey, I have a chest and this variable is secretly a different type"
let chest = "Pig Bank";
// "Although I said it's a mystery chest, I promise that this chest is a string"
let chestLength = chest.length;
// Another way to do type assertion is using <> (Not Recommended)
let myChest = 1000;
let chestCoin = myChest;
// Error Handler
function errorHandler(message) {
    throw new Error(message);
}
// Let's create a function
const addConcat = (x, y, z) => {
    if (z === "add")
        return x + y;
    if (z === "concat")
        return x.toString() + y.toString();
    return errorHandler("Something wrong");
};
// Let's call it
const concat = addConcat(10, 20, "concat");
const add = addConcat(30, 40, "add");
const addError = addConcat(30, 40, "add");
let addConcatResult = {
    concat: concat,
    add: add,
    addError: addError
};
console.table(addConcatResult);
