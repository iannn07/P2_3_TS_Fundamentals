// Inheritance
class parentMathematician {
  constructor(
    public name: string,
    private age: number,
    protected invention: string[]
  ) {
    this.name = name;
    this.age = age;
    this.invention = invention;
  }
  public getAge() {
    return `${this.name} is ${this.age} years old`;
  }
  private getInvention() {
    return `${this.name} has invented: ${this.invention}`;
  }
}

class childMathematician extends parentMathematician {
  constructor(
    name: string,
    age: number,
    invention: string[],
    public origin: string
  ) {
    super(name, age, invention);
    this.origin = origin;
  }
  protected getOrigin() {
    return `${this.name} is from ${this.origin}`;
  }
}

const childGauss = new childMathematician(
  "Carl Gauss",
  77,
  ["Algebra", "Normal Distribution"],
  "Germany"
);

console.log(`Child Gauss: `, childGauss);
console.log(`Child Gauss (Age): `, childGauss.getAge());
// Remember, you can't access anything private & protected within a class
// console.log(`Child Gauss (Inventions): `, childGauss.getInvention());
// console.log(`Child Gauss (Origin): `, childGauss.getOrigin());

// Although the function is protected, you can access it since the variable is public
console.log(`Child Gauss (Origin): `, childGauss.origin);

// Interface in Classes
interface mathematician {
  name: string;
  age: number;
  invent(invention: string[]): string;
}

class interfaceMathematician implements mathematician {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  invent(invention: string[]): string {
    return `${this.name} has invented: ${invention.join(", ")}`;
  }
}

const interfaceGauss = new interfaceMathematician("Carl Gauss", 77);
console.log(`Interface Gauss: `, interfaceGauss);
console.log(
  `Interface Gauss (Inventions): `,
  interfaceGauss.invent(["Algebra", "Combinatorics"])
);

// Static Members
class profileMathematician {
  static mathName: string = "Carl Gauss";
  static mathAge: number = 77;
}

class inventMathematician {
  static invent: string[] = ["Algebra", "Combinatorics"];
  getMathematician(): string {
    return `${profileMathematician.mathName} is ${profileMathematician.mathAge} years old and has invented: ${inventMathematician.invent.join(
      ", "
    )}`;
  }
}

const staticGauss = new inventMathematician();
console.log(`Static Gauss: `, staticGauss.getMathematician());

