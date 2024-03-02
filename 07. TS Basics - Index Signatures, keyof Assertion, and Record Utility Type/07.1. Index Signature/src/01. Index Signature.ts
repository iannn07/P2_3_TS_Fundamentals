// Index Signature

// Function Index Signature
interface cumiDarat {
  // This is the index signature
  [key: string]: number;
}

function totalCumiDarat(cumiDarat: cumiDarat) {
  let sum = 0;
  for (const key in cumiDarat) {
    sum += cumiDarat[key];
  }
  return sum;
}

const cumiDarat: cumiDarat = {
  "2GD": 2,
  "2KD": 2,
  "1KD": 1,
};

console.log(`Cumi Darat in total: ${totalCumiDarat(cumiDarat)}`);

// Let's take a look to another example
interface bikiniBottom {
  [key: string]: string | number | string[] | undefined;
  Population: number;
  BestPlaces: string[];
  MainCharacter: string;
  SideCharacter?: string;
}

const bikiniBottom: bikiniBottom = {
  Population: 500,
  BestPlaces: ["Chum Bucket", "Krusty Crab"],
  MainCharacter: "Spongebob",
  SideCharacter: "Patrick",

  // You can add other properties, however you should define the main properties first.
  Hobbies: "Catching Jellyfish",
}

console.table(bikiniBottom)