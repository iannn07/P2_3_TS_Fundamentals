// Type Assertion

// It's like "Hey, I have a chest and this variable is secretly a different type"
let chest: unknown = "Pig Bank";

// "Although I said it's a mystery chest, I promise that this chest is a string"
let chestLength: number = (chest as string).length;

// Another way to do type assertion is using <> (Not Recommended)
let myChest: any = 1000;
let chestCoin = <number>myChest;

// Error Handler
function errorHandler(message: string): never {
    throw new Error(message);
}

// Let's create a function
const addConcat = (x: number, y: number, z: "add" | "concat"): unknown => {
    if (z === "add") return x + y;
    if (z === "concat") return x.toString() + y.toString();
    return errorHandler("Something wrong");
}

// Let's call it
const concat:string = addConcat(10, 20, "concat") as string;
const add:number = addConcat(30, 40, "add") as number
const addError:string = addConcat(30, 40, "add") as string

let addConcatResult = {
    concat: concat,
    add: add,
    addError: addError
}

console.table(addConcatResult);