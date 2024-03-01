// Objects in TS

const carlGauss = {
  name: "Carl Gauss",
  invention: "Normal Distribution",
  age: 77,
};

console.log(carlGauss);

// Another way to create an object and declare its data types is using type function

type mathematician = {
  name: string;
  invention: string;
  age: number;
  live: boolean;
};

const gwLeibniz: mathematician = {
  name: "Gottfried Wilhelm Leibniz",
  invention: "Binary Number",
  age: 70,
  live: true,
};

console.log(gwLeibniz);

// If you're unsure an object have properties that is set, we can do the following

// If you noticed, I used interface in here, not type. In short, it's just the same
interface doctor {
  name: string;
  invention?: (string | number)[];
  age: number;
}

const sirFleming: doctor = {
  name: "Sir Alexander Fleming",
  invention: ["Penicillin"],
  age: 73,
};

const fakeSirFleming: doctor = {
  name: "Fake Sir Alexander Fleming",
  age: 73,
};

const getDoctorInvention = (doctors: doctor[]) => {
  return doctors.map((d) => {
    if (d.invention) {
      return `${d.name} invented ${d.invention}`;
    } else {
      return `${d.name} didn't invent anything`;
    }
  });
};

console.table([sirFleming, fakeSirFleming]);
console.log(getDoctorInvention([sirFleming, fakeSirFleming]));
