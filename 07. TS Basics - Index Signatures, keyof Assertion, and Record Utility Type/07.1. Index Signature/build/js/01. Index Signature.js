"use strict";
// Index Signature
function totalCumiDarat(cumiDarat) {
    let sum = 0;
    for (const key in cumiDarat) {
        sum += cumiDarat[key];
    }
    return sum;
}
const cumiDarat = {
    "2GD": 2,
    "2KD": 2,
    "1KD": 1,
};
console.log(`Cumi Darat in total: ${totalCumiDarat(cumiDarat)}`);
const bikiniBottom = {
    Population: 500,
    BestPlaces: ["Chum Bucket", "Krusty Crab"],
    MainCharacter: "Spongebob",
    SideCharacter: "Patrick",
    // You can add other properties, however you should define the main properties first.
    Hobbies: "Catching Jellyfish",
};
console.table(bikiniBottom);
