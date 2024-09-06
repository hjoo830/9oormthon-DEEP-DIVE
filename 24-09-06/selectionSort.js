function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
  }
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
selectionSort(numbers);
console.log("선택 정렬 결과:", numbers);
