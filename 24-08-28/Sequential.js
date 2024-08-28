const fs = require("fs");
const input = fs.readFileSync("./24-08-28/input.txt").toString().split(" ");
let age = parseInt(input[0].trim());
let n = parseInt(input[1].trim());

console.log(`현재 나이: ${age}살`);
console.log(`${n}년 후 나이: ${age + n}살`);
