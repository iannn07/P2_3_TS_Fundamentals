"use strict";
// Error Handler in TS
function errorHandler(message) {
    throw new Error(message);
}
// Type Guard
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
// Let's implement them
function checkValues(value) {
    if (isNumber(value))
        return "number";
    if (isString(value))
        return "string";
    else
        return errorHandler("Invalid value");
}
// Let's use them
const values = ["Hello", 7, true];
const results = values.map((item) => checkValues(item));
// This will result an error, since the third type is boolean
console.log(results);
