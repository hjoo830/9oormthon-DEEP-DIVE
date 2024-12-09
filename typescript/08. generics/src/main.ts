// Generic이 필요한 상황
// 함수에 다른 타입의 인수가 들어오면 계속 다른 타입을 넣어줘야 한다면?
function getArrayLength1(arr: number[]): number {
  return arr.length;
}

const array1 = [1, 2, 3];
getArrayLength(array1);

function getArrayLength2(arr: number[] | string[]): number {
  return arr.length;
}

const array2 = ["a", "b", "c"];
getArrayLength2(array2);

function getArrayLength3(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}

const array3 = [true, true, false];
getArrayLength3(array3);

// Generic 사용
// 제네릭은 타입을 함수의 파라미터처럼 사용
function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

const array4 = [1, 2, 3];
getArrayLength<number>(array4);

const array5 = ["a", "b", "c"];
getArrayLength<string>(array5);

const array6 = [true, true, false];
getArrayLength<boolean>(array6);

// 예시2
// interface Vehicle {
//   name: string;
//   color: string;
//   option: any;
// }

// const car: Vehicle = {
//   name: "Car",
//   color: "red",
//   option: {
//     price: 1000,
//   },
// };

// const bike: Vehicle = {
//   name: "Bike",
//   color: "green",
//   option: true,
// };

// 예시2에 Generic 적용
// 제네릭을 사용하면 재사용성이 높은 함수와 클래스를 생성할 수 있다
// any처럼 타입을 직접 지정하지 않지만, 타입을 체크해 컴파일러가 오류를 찾을 수 있게 된다
interface Vehicle<T> {
  name: string;
  color: string;
  option: T;
}

const car: Vehicle<{ price: number }> = {
  name: "Car",
  color: "red",
  option: {
    price: 1000,
  },
};

const bike: Vehicle<boolean> = {
  name: "Bike",
  color: "green",
  option: true,
};

// 예시3
// const makeArr = (x: number) => {
//   return [x];
// };

// const array7 = makeArr(5);
// const array8 = makeArr("a");
// const array9 = makeArr(true);

// 예시3에 Generic 적용
const makeArr0 = <T>(x: T) => {
  return [x];
};

const array07 = makeArr0(5);
const array08 = makeArr0("a");
const array09 = makeArr0(true);

// 예시3에 Generic 적용 + 매개변수 2개
const makeArr = <T1, T2 = string>(x: T1, y: T2): [T1, T2] => {
  return [x, y];
};

const array7 = makeArr<number, number>(4, 5);
const array8 = makeArr<number, string>(1, "a");
const array9 = makeArr<number>(1, "a"); // 기본 타입으로 string 주고 생략해도 됨

// 예시4
// const makeFullName = (obj: { firstName: string; lastName: string }) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + " " + obj.lastName,
//   };
// };

// const user1 = makeFullName({
//   firstName: "Hyoju",
//   lastName: "Hwang",
//   location: "Daegu", // 알려진 속성만 사용 가능해서 error
// });
//

// Generic 적용 (extends)
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const user1 = makeFullName({
  firstName: "Hyoju",
  lastName: "Hwang",
  location: "Daegu",
});

// const user2 = makeFullName({
//   // firstName 없어서 error. firstName과 lastName은 필수
//   lastName: "Hwang",
//   location: "Daegu",
// });
