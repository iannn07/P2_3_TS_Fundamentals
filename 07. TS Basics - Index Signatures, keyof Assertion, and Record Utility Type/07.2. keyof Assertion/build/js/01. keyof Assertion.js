"use strict";
const bikiniBottom = {
    Population: 500,
    BestPlaces: ["Chum Bucket", "Krusty Crab"],
    MainCharacter: "Spongebob",
    SideCharacter: "Patrick",
};
console.table(bikiniBottom);
// keyof bikiniBottom
for (const key in bikiniBottom) {
    console.log(`${key}: ${bikiniBottom[key]}`);
}
// In addition, we can access the key of bikiniBottom object like JS, which is the same as:
Object.keys(bikiniBottom).map((item) => {
    console.log(`${bikiniBottom[item]}`);
});
// Let's take a look to another example
function getBikiniBottomKeyOf(bikiniBottom, key) {
    return `This ${key} belongs to ${bikiniBottom[key]}`;
}
console.log(getBikiniBottomKeyOf(bikiniBottom, "MainCharacter"));
const plankMood = {
    Happy: "Happy",
    Sad: "Sad",
};
for (const mood in plankMood) {
    console.log(plankMood[mood]);
}
/*
However, the usage of interface and types in terms of Index Signature and Record has its own limitations. The following is the tips:
- Use Records when you want to create an object type with specific keys (pre-defined key/literal types)
- Use Index when you're not sure the exact key you want to use
*/ 
