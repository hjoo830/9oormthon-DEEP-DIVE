function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5];
const target = 3;
const result = linearSearch(numbers, target);
console.log(result);
