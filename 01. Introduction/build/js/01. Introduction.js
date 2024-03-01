"use strict";
let username = `Carl Gauss`;
console.log(`Hello, ${username}!`);
// Sum of an array
function sum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(sum([1, 2, 3, 4, 5]));
/*
A valid JS is also a valid TS. However, it doesn't mean that the TS compiler will like something like below.

Remember that one meme? The one says 2 + "2" = 22, while 2 - "2" = 0

However, this issue can be resolved by using "use strict" in JS, while in TS we have to uncomment "noEmitOnError": true, in tsconfig.json
*/
// You can declare your variable just as follows
let a = 2;
let b = "2";
// Or
let x = 2;
let y = "2";
let basicMath = [
    { Operator: "+", Value: a + Number(b) },
    { Operator: "-", Value: a - Number(b) },
    { Operator: "*", Value: a * Number(b) },
    { Operator: "/", Value: a / Number(b) },
];
console.table(basicMath);
