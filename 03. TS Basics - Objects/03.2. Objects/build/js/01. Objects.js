"use strict";
// Objects in TS
const carlGauss = {
    name: "Carl Gauss",
    invention: "Normal Distribution",
    age: 77,
};
console.log(carlGauss);
const gwLeibniz = {
    name: "Gottfried Wilhelm Leibniz",
    invention: "Binary Number",
    age: 70,
    live: true,
};
console.log(gwLeibniz);
const sirFleming = {
    name: "Sir Alexander Fleming",
    invention: ["Penicillin"],
    age: 73,
};
const fakeSirFleming = {
    name: "Fake Sir Alexander Fleming",
    age: 73,
};
const getDoctorInvention = (doctors) => {
    return doctors.map((d) => {
        if (d.invention) {
            return `${d.name} invented ${d.invention}`;
        }
        else {
            return `${d.name} didn't invent anything`;
        }
    });
};
console.table([sirFleming, fakeSirFleming]);
console.log(getDoctorInvention([sirFleming, fakeSirFleming]));
