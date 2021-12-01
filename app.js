// Importing files from node
const fs = require("fs");

console.clear();
console.log("Working with CLI node first steps");

console.log("==================================");

const base = 5;

let salida = "";
for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`;
}

// Here name_file | data that goes inside of the file | checking errors during process
fs.writeFile("table-5.txt", salida, (error) => {
  if (error) throw error;
  console.log("Table have been created");
});
console.log(salida);
