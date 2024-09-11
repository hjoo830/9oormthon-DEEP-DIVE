const numbers = [1, 2, 3, 4, 5];

// 각 숫자에 2를 곱함
const doubled = numbers.map((num) => num * 2);
console.log("map 결과:", doubled);

// 짝수만 필터링
const evens = numbers.filter((num) => num % 2 === 0);
console.log("filter 결과:", evens);

// 모든 숫자의 합 계산
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce 결과:", sum);
