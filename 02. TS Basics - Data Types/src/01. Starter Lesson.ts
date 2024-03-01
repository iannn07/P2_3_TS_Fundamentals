// Inference & Implicit
// TS Know how to infer and implicit types

let mathematicianName = `Gottfried Wilhelm von Leibniz`;
console.log(`Hello, ${mathematicianName}!`);

let mathematicianAge = 70;
console.log(`${mathematicianName} died in ${mathematicianAge} years old.`);

// Data Types
let imString    : string = `Jacob Bernoulli`;
let imNumber    : number = 50;
let imBoolean   : boolean = true;
let imUnion     : string | number = `Jacob Bernoulli`;

// Any allows you to assign values like JS do
let imAny       : any = `I can be anything`;
imAny = 50;

console.table([imString, imNumber, imBoolean, imAny, imUnion]);

// This function is still working, however TS is not into it. TS is into another man
/*
const sum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}
*/
// TS is into this man
const sum = (array: number[]) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(`The sum of this array is = ${sum([1, 2, 3, 4, 5])}`);

// Let's try using a JS Class, being goofy eh
class createMathematician {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const carlGauss = new createMathematician(`Carl Gauss`, 77);
console.log(`${carlGauss.name} died in ${carlGauss.age} years old.`);

// However, in this session it's all about the variables
