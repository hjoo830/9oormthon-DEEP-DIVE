// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.23;

// String
let string: string;
let firstName: string = "Hyoju";
let lastName: string = "Hwang";

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ["Hyoju", "Gildong"];
let names2: Array<string> = ["Hyoju", "Gildong"];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ["Hyoju", 1, 2];
let array2: Array<string | number> = ["Hyoju", 1, 2];

// 여러 타입을 단언 X any
let someArray = ["Hyoju", 1, {}, [], false];

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];

// 읽기 전용이라서 에러 남
// stringArray.push("C");
// numberArray[0] = 3;

// Tuple
// 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이를 지켜야 한다.
let tuple1: [string, number];
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2]; // 길이 안맞아서 error
// tuple1 = [1, "a"]; // 타입 순서 안맞아서 error

// 튜플 타입의 배열(2차원 배열)
let users: [number, string][];
users = [
  [1, "hyoju"],
  [2, "Gildong"],
];

// push() 등을 통해 값을 넣는 것은 가능
let tuple2: [string, number];
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2); // ['a', 1, 2]
// tuple2.push(true) // [string, number]로 정의된 배열에 boolean 값을 추가하려고 해서 error

// Any
// 모든 타입으로 어떠한 값도 할당 가능. 되도록 사용 X
// 3rd party 라이브러리 사용 시 타입 모를 때만 사용
let any: any = "abc";
any = 1;
any = [];

// Unknown
// 알 수 없는 타입을 의미하며, 어떠한 값도 할당 가능
// 하지만 unknown을 다른 타입에는 할당 불가능
let unknown: unknown = 123;
// let string1: string = unknown; // unknown을 다른 타입에 할당하려고 해서 error
let string2: string = unknown as string; // 타입을 단언하면 할당 가능

// Object
// typeof 연산자가 object로 반환하는 모든 타입
let obj: object = {};
let arr: object = [];
let func: object = function () {};
// let nul: object = null //컴파일러 옵션에서 strict하면 null 포함 X
let date: object = new Date();

// 주로 객체 속성에 대한 타입을 개별적으로 지정
let obj1: { id: number; title: string } = {
  id: 1,
  title: "title1",
};

let obj2: { id: number; title: string } = {
  id: 2,
  title: "title2",
  // desc: "desc2", // error
};

// Union (2개 이상의 타입을 허용)
let union: string | number;
union = "hi";
union = 123;
// union = []; // string 또는 number 타입만 가능한데 배열을 할당하려고 해서 error

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x + y;
};

// 반환값 없을 때
let func2: () => void;
func2 = function () {
  console.log("hello");
};

// Null, Undefined
// "strictNullChecks": false 라면 아래와 같이 할당 가능
// let number1: number = undefined;
// let string3: string = null;
// let object: { a: 1; b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;

// "strictNullChecks": true 라도 void에는 Undefined를 할당 가능
let void2: void = undefined;

// Void (주로 값을 반환하지 않는 함수에서 사용)
function greeting(): void {
  console.log("hi!");
}

// 값을 반환하지 않는 함수는 실제로는 undefined 반환
function greeting1(): void {
  console.log("hi!");
}
const hi: void = greeting1();
console.log(hi); // undefined

function greeting2(): undefined {
  console.log("hi!");
}

// Never
// 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용
// 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미(무한 루프)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("무한 루프");
  }
}

// 빈 배열을 타입으로 잘못 선언한 경우에도 never 타입
const never: [] = [];
// never.push(1); // number 형식의 인수는 never 형식의 매개변수에 할당될 수 없다
