function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // 재귀적으로 n * (n-1)! 계산
}

console.log(factorial(5)); // 120
