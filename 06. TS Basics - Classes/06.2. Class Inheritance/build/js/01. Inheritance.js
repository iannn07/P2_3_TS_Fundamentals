"use strict";
// Inheritance
class parentMathematician {
    constructor(name, age, invention) {
        this.name = name;
        this.age = age;
        this.invention = invention;
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
class childMathematician extends parentMathematician {
    constructor(name, age, invention, origin) {
        super(name, age, invention);
        this.origin = origin;
        this.origin = origin;
    }
    getOrigin() {
        return `${this.name} is from ${this.origin}`;
    }
}
const childGauss = new childMathematician("Carl Gauss", 77, ["Algebra", "Normal Distribution"], "Germany");
console.log(`Child Gauss: `, childGauss);
console.log(`Child Gauss (Age): `, childGauss.getAge());
// Remember, you can't access anything private & protected within a class
// console.log(`Child Gauss (Inventions): `, childGauss.getInvention());
// console.log(`Child Gauss (Origin): `, childGauss.getOrigin());
// Although the function is protected, you can access it since the variable is public
console.log(`Child Gauss (Origin): `, childGauss.origin);
class interfaceMathematician {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    invent(invention) {
        return `${this.name} has invented: ${invention.join(", ")}`;
    }
}
const interfaceGauss = new interfaceMathematician("Carl Gauss", 77);
console.log(`Interface Gauss: `, interfaceGauss);
console.log(`Interface Gauss (Inventions): `, interfaceGauss.invent(["Algebra", "Combinatorics"]));
// Static Members
class profileMathematician {
}
profileMathematician.mathName = "Carl Gauss";
profileMathematician.mathAge = 77;
class inventMathematician {
    getMathematician() {
        return `${profileMathematician.mathName} is ${profileMathematician.mathAge} years old and has invented: ${inventMathematician.invent.join(", ")}`;
    }
}
inventMathematician.invent = ["Algebra", "Combinatorics"];
const staticGauss = new inventMathematician();
console.log(`Static Gauss: `, staticGauss.getMathematician());
