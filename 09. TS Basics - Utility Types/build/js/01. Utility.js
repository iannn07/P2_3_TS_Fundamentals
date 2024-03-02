"use strict";
// Generics in TS
// Instead of doing this
function isNumber(value) {
    return typeof value === "number";
}
function isString(value) {
    return typeof value === "string";
}
// We can make them as a generic function
function isNumberOrString(value) {
    return typeof value === "number" || typeof value === "string";
}
console.log(isNumberOrString(5));
// Let's try another example
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
const checkObject = [
    isObject({}),
    isObject(5),
    isObject("5"),
    isObject(null),
    isObject(true),
    isObject([1, 2, 3]),
];
checkObject.forEach((value, index) => console.log(`${index + 1}. ${value}`));
// Data type checks
const isArrayObj = (value) => {
    // Checks whether a value is an array and not empty
    if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    // Checks whether a value is an object and not empty
    if (isObject(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    return { value, is: !!value };
};
const checkArrayObj = [[], {}, [1, 2, 3], { name: "Gauss" }, "", 5, true, "5"];
checkArrayObj.forEach((value) => console.log(isArrayObj(value)));
const isBool = (value) => {
    // Checks whether a value is an array and not empty
    if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    // Checks whether a value is an object and not empty
    if (isObject(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    return { value, is: !!value };
};
const isUserID = (value) => {
    return value;
};
console.log(isUserID({ id: 1, name: "Gauss" }));
const getUserProperty = (user, key) => {
    return user.map((user) => user[key]);
};
const user = [
    {
        id: 1,
        name: "Gauss",
        age: 77,
        profile: {
            invention: "Normal Distribution",
            origin: "German",
        },
        status: "Mathematician",
    },
    {
        id: 2,
        name: "Leibniz",
        age: 70,
        profile: {
            invention: "Binary Number",
            origin: "German",
        },
        status: "Mathematician",
    },
];
console.log(getUserProperty(user, "id"));
console.log(getUserProperty(user, "profile"));
// Generic in Class
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    get getValue() {
        return this.value;
    }
    set setValue(value) {
        this.value = value;
    }
}
// Automatically infers to string
const genericClass = new GenericClass("Gauss");
console.log(`First Value: ${genericClass.getValue}`);
genericClass.setValue = "Leibniz";
console.log(`After Set the Value: ${genericClass.getValue}`);
// Or you can assert the type
const genericClassAssertion = new GenericClass("Gauss");
console.log(`First Value: ${genericClassAssertion.getValue}`);
genericClassAssertion.setValue = 10;
console.log(`After Set the Value: ${genericClassAssertion.getValue}`);
