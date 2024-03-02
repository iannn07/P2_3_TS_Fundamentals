// Generics in TS

// Instead of doing this
function isNumber(value: any): value is number {
  return typeof value === "number";
}

function isString(value: any): value is string {
  return typeof value === "string";
}

// We can make them as a generic function
function isNumberOrString<Type>(value: Type): Boolean {
  return typeof value === "number" || typeof value === "string";
}

console.log(isNumberOrString(5));

// Let's try another example
function isObject<T>(value: T): value is T {
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
const isArrayObj = <T>(value: T): { value: T; is: Boolean } => {
  // Checks whether a value is an array and not empty
  if (Array.isArray(value) && !value.length) {
    return { value, is: false };
  }
  // Checks whether a value is an object and not empty
  if (isObject(value) && !Object.keys(value as keyof T).length) {
    return { value, is: false };
  }
  return { value, is: !!value };
};

const checkArrayObj = [[], {}, [1, 2, 3], { name: "Gauss" }, "", 5, true, "5"];

checkArrayObj.forEach((value) => console.log(isArrayObj(value)));

// Interface with Generic
interface BoolCheck<T> {
  value: T;
  is: Boolean;
}

const isBool = <T>(value: T): BoolCheck<T> => {
  // Checks whether a value is an array and not empty
  if (Array.isArray(value) && !value.length) {
    return { value, is: false };
  }
  // Checks whether a value is an object and not empty
  if (isObject(value) && !Object.keys(value as keyof T).length) {
    return { value, is: false };
  }
  return { value, is: !!value };
};

// Extending Generics
interface userID {
  id: number;
}

const isUserID = <T extends userID>(value: T): T => {
  return value;
};

console.log(isUserID({ id: 1, name: "Gauss" }));

const getUserProperty = <T extends userID, K extends keyof T>(
  user: T[],
  key: K
): T[K][] => {
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
class GenericClass<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }

  get getValue() {
    return this.value;
  }

  set setValue(value: T) {
    this.value = value;
  }
}

// Automatically infers to string
const genericClass = new GenericClass("Gauss");
console.log(`First Value: ${genericClass.getValue}`);
genericClass.setValue = "Leibniz";
console.log(`After Set the Value: ${genericClass.getValue}`);

// Or you can assert the type
const genericClassAssertion = new GenericClass<string | number | []>("Gauss");
console.log(`First Value: ${genericClassAssertion.getValue}`);
genericClassAssertion.setValue = 10;
console.log(`After Set the Value: ${genericClassAssertion.getValue}`);
