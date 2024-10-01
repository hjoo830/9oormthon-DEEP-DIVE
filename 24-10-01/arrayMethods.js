// map()
const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);
console.log("map():", squared); // [1, 4, 9, 16]

// filter()
const even = numbers.filter((num) => num % 2 === 0);
console.log("filter():", even); // [2, 4]

// reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", sum); // 10

// find()
const found = numbers.find((num) => num > 2);
console.log("find():", found); // 3
