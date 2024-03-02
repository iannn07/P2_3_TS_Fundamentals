"use strict";
// Rest Parameter in TS
const myMathematician = (name, ...inventions) => {
    console.log(`My name is ${name}. I have invented ${inventions.join(", ")}`);
};
myMathematician("Carl Gauss", "Combinatorics", "Normal Distribution");
