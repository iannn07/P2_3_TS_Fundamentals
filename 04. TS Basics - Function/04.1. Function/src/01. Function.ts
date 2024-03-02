// Functions in TS
// Type Aliases
type stringNumberArr = (string | number)[];

// Doctor Object Description
interface doctor {
  name: string;
  invention?: stringNumberArr;
  age: number;
}

// Literal Types
let emailStatus: "Read" | "Delivered" | "Sent";

// Functions
function getUsername(username: string) {
  return `Hello, ${username}!`;
}

function getTotal(total: number[]) {
  return total.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

// Void function
const retrieveAnything = (anything: any): void => {
  if (typeof anything === "string") {
    console.log(getUsername(anything));
  } else {
    console.log(getTotal(anything));
  }
};

retrieveAnything("Ian");
retrieveAnything([1, 2, 3, 4, 5]);

// You can change the return type of a function by doing the following
const modulo = function (x: number[], y: number): number[] {
  return x.map((num) => num % y);
};

const moduloResult = modulo([1, 2, 3, 4, 5], 2);
console.log(moduloResult);

// Print whether the moduloResult is odd or even
const modResultArr: string[] = [];
moduloResult.map((oddEven) => {
  oddEven === 1 ? modResultArr.push("Odd") : modResultArr.push("Even");
});
console.log(modResultArr);

// Or you can use this method
/* 
Define the type of the function (Type Alias) or using interface
type exponent = (x: number[], y: number) => number[];
*/
interface exponent {
  (x: number[], y: number): number[];
}

// Assign the type alias to the function
const myExponentiation: exponent = (x, y) => x.map((num) => num ** y);

const expResult = myExponentiation([1, 2, 3, 4, 5], 2);
console.log(expResult);

// Optional Parameters
type checkModulo = (x: number[], y: number, z?: number) => number[];
const moduloCheckExponentiation: checkModulo = (x, y, z) => {
  if (typeof z !== "undefined")
    return x.map((num) => {
      return num % z;
    });
  else return x.map((num) => num ** y);
};

const checkResultWithoutZ = moduloCheckExponentiation([1, 2, 3, 4, 5], 2);
const checkResultWithZ = moduloCheckExponentiation([1, 2, 3, 4, 5], 2, 3);

// Assign to an object
const expModResult = {
  withoutZ: checkResultWithoutZ,
  withZ: checkResultWithZ,
};

console.table(expModResult);

// Default Parameters
// The following function has a default value of z, although the type alias for checkModulo is z is an optional parameter, we can overcome this issue by using default parameters
const defaultParameters: checkModulo = (x, y, z = 2) => {
  if (typeof z !== "undefined")
    return x.map((num) => {
      return num % z;
    });
  // However, the aftereffect of using default parameter, the following line will not be executed at all :D
  else return x.map((num) => num ** y);
};

const defaultParametersWithoutZ = defaultParameters([1, 2, 3, 4, 5], 2);
const defaultParametersWithZ = defaultParameters([1, 2, 3, 4, 5], 2, 3);

const defaultParametersResult = {
  withoutZ: defaultParametersWithoutZ,
  withZ: defaultParametersWithZ,
};

console.table(defaultParametersResult);
