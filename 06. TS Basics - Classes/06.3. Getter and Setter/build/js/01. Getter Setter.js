"use strict";
// Getter Setter in TS
class createCumiDarat {
    constructor() {
        this.cumiDarat = [];
    }
    // Returns the cumiDarat value
    get cumiDaratProfile() {
        return this.cumiDarat;
    }
    // Sets a new cumiDarat Value
    set cumiDaratProfile(cumiDarat) {
        if (Array.isArray(cumiDarat) &&
            cumiDarat.every((el) => typeof el === "string")) {
            this.cumiDarat = cumiDarat;
            return;
        }
        else {
            throw new Error("Not an array");
        }
    }
}
const toyota = new createCumiDarat();
toyota.cumiDaratProfile = ["2GD", "2KD", "1KD"];
console.log(toyota.cumiDaratProfile);
// Using the setter
// Spread Operator
toyota.cumiDaratProfile = [...toyota.cumiDaratProfile, "F33A"];
console.log(toyota.cumiDaratProfile);
// Re-declare the value
toyota.cumiDaratProfile = ["F33A"];
console.log(toyota.cumiDaratProfile);
