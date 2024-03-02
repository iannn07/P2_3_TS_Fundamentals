// Rest Parameter in TS

// Type Alias for Rest Parameter Function
type mathematician = (name: string, ...inventions: string[]) => void;

const myMathematician: mathematician = (name, ...inventions) => {
  console.log(`My name is ${name}. I have invented ${inventions.join(", ")}`);
};

myMathematician("Carl Gauss", "Combinatorics", "Normal Distribution")
