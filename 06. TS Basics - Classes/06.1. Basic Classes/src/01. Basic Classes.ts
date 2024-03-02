// Classes in TS

// Basic Class
class basicMathematician {
  name: string;
  age: number;
  invention: string[];
  constructor(name: string, age: number, ...invention: string[]) {
    this.name = name;
    this.age = age;
    this.invention = invention;
  }
}

const basicGauss = new basicMathematician(
  "Carl Gauss",
  77,
  "Algebra",
  "Normal Distribution"
);
console.log(`Basic Gauss: `, basicGauss);

// Simplified Class (Visibility Modifiers)
class simplifiedMathematician {
  constructor(
    public name: string,
    public age: number,
    public invention: string[]
  ) {
    this.name = name;
    this.age = age;
    this.invention = invention;
  }
}

const simplifiedGauss = new simplifiedMathematician("Carl Gauss", 77, [
  "Algebra",
  "Normal Distribution",
]);
console.log(`Simplified Gauss: `, simplifiedGauss);

// Both of them resulting the same, however it's a bit different when we want to declare a new object

// If you have a new properties for the class, you can use the definite assignment assertion
class definiteMathematician {
  further!: string;
  constructor(
    public name: string,
    public age: number,
    public invention: string[],
    origin: string
  ) {
    this.name = name;
    this.age = age;
    this.invention = invention;
    this.further = origin;
  }
}

// Public, Private, vs. Protected
class visibilityMathematician {
  constructor(
    public name: string,
    private age: number,
    protected invention: string[]
  ) {
    this.name = name;
    this.age = age;
    this.invention = invention;
  }
  getAge() {
    return `${this.name} is ${this.age} years old`;
  }
  getInvention() {
    return `${this.name} has invented: ${this.invention}`;
  }
}

const visibilityGauss = new visibilityMathematician("Carl Gauss", 77, [
  "Algebra",
  "Normal Distribution",
]);

console.log(`Visibility Gauss: `, visibilityGauss);

// You can access private or protected by the following
console.log(`Visibility Gauss (Age): `, visibilityGauss.getAge());
console.log(`Visibility Gauss (Inventions): `, visibilityGauss.getInvention());
// You can't access them by doing the following 
/* 
console.log(`Visibility Gauss (Age): `, visibilityGauss.age);
console.log(`Visibility Gauss (Inventions): `, visibilityGauss.invention);
*/
