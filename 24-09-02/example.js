// 1. 변수 선언과 데이터 타입 확인
let num = 10; // 숫자 타입 변수
let str = "Hello"; // 문자열 타입 변수
let isTrue = true; // 불리언 타입 변수
let arr = [1, 2, 3]; // 배열 타입 변수
let obj = { name: "hyoju", age: 23 }; // 객체 타입 변수
let undef; // 선언만 하고 초기화하지 않은 변수 (undefined)
let nul = null; // null 값 변수

console.log("num:", num, "타입:", typeof num);
console.log("str:", str, "타입:", typeof str);
console.log("isTrue:", isTrue, "타입:", typeof isTrue);
console.log("arr:", arr, "타입:", typeof arr);
console.log("obj:", obj, "타입:", typeof obj);
console.log("undef:", undef, "타입:", typeof undef);
console.log("nul:", nul, "타입:", typeof nul);

// 2. 산술 연산자
let a = 10;
let b = 3;
console.log("a + b =", a + b); // 덧셈
console.log("a - b =", a - b); // 뺄셈
console.log("a * b =", a * b); // 곱셈
console.log("a / b =", a / b); // 나눗셈
console.log("a % b =", a % b); // 나머지

// 3. 비교 연산자
console.log("a == b:", a == b); // 값이 같은지 비교
console.log("a != b:", a != b); // 값이 다른지 비교
console.log("a === b:", a === b); // 값과 타입이 같은지 비교
console.log("a !== b:", a !== b); // 값과 타입이 다른지 비교
console.log("a > b:", a > b); // a가 b보다 큰지 비교
console.log("a < b:", a < b); // a가 b보다 작은지 비교
console.log("a >= b:", a >= b); // a가 b보다 크거나 같은지 비교
console.log("a <= b:", a <= b); // a가 b보다 작거나 같은지 비교

// 4. 논리 연산자
let x = true;
let y = false;
console.log("x && y:", x && y); // 논리 AND
console.log("x || y:", x || y); // 논리 OR
console.log("!x:", !x); // 논리 NOT

// 5. 삼항 연산자
let age = 20;
let isAdult = age >= 20 ? "Yes" : "No";
console.log(`${age}살은 성인인가요? ${isAdult}`);

// 6. 할당 연산자
let c = 5;
c += 10; // c = c + 10
console.log("c += 10:", c);
c -= 3; // c = c - 3
console.log("c -= 3:", c);
c *= 2; // c = c * 2
console.log("c *= 2:", c);
c /= 4; // c = c / 4
console.log("c /= 4:", c);
c %= 3; // c = c % 3
console.log("c %= 3:", c);
