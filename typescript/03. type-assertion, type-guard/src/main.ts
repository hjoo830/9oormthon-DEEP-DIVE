interface Foo {
  bar: number;
  bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";

// const bodyElement = document.querySelector("body");
// bodyElement?.innerText = "Hello"; // null 일 수 있다고 error

// 타입 단언
const bodyElement = document.querySelector("body") as HTMLBodyElement;
bodyElement.innerText = "Hello";

// ! not null 타입 단언
const bodyElement1 = document.querySelector("body");
bodyElement1!.innerText = "Hello";

// type guard
const bodyElement2 = document.querySelector("body");
if (bodyElement2) {
  bodyElement2.innerText = "Hello";
}

// 잘못된 예시
function func(arg: string | null) {
  // return arg.toLowerCase(); // arg는 null일 수 있어서 error
  // return (arg as string).toLowerCase(); // 이렇게 하면 여기에선 에러 안떠도 실행하면 Uncaught TypeError: arg.toLowerCase is not a function
  // type guard 사용 (올바른 예시)
  if (arg) {
    return arg.toLowerCase();
  }
}
func("hello");
func(null);
