// loops

//for loop structure
// for (init, condition, increment]{
// process
//};

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const countries = ["UNITED STATES", "MEXICO", "CANADA"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[1].toLowerCase());
}
console.log(newArr);

const webTech = ["html", "css", "java", "python", "access"];

for (const tech of webTech) {
  console.log(tech.toUpperCase());
}
//while - loops 0 to infinite

//do-while - loops once

// for in or for of - an array
