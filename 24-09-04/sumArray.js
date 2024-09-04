const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const total = sumArray(numbers);
console.log(`주어진 숫자 리스트의 합: ${total}`);
