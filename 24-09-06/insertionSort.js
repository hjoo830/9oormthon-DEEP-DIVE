function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
insertionSort(numbers);
console.log("삽입 정렬 결과:", numbers);
