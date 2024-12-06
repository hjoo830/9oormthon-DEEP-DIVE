function add1(a: string, b: string): string {
  return a + b;
}

function add2(a: number, b: number): number {
  return a + b;
}

console.log(add1("Hello", "World"));
console.log(add2(1, 2));

// 위의 두 함수를 하나로 만들어주려면?

// 타입 선언
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// 함수 구현
function add(a: any, b: any): any {
  return a + b;
}

console.log(add("Hello", "World"));
console.log(add(1, 2));
