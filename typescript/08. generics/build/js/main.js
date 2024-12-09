"use strict";
// Generic이 필요한 상황
// 함수에 다른 타입의 인수가 들어오면 계속 다른 타입을 넣어줘야 한다면?
function getArrayLength1(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
getArrayLength(array1);
function getArrayLength2(arr) {
    return arr.length;
}
const array2 = ["a", "b", "c"];
getArrayLength2(array2);
function getArrayLength3(arr) {
    return arr.length;
}
const array3 = [true, true, false];
getArrayLength3(array3);
// Generic 사용
// 제네릭은 타입을 함수의 파라미터처럼 사용
function getArrayLength(arr) {
    return arr.length;
}
const array4 = [1, 2, 3];
getArrayLength(array4);
const array5 = ["a", "b", "c"];
getArrayLength(array5);
const array6 = [true, true, false];
getArrayLength(array6);
const car = {
    name: "Car",
    color: "red",
    option: {
        price: 1000,
    },
};
const bike = {
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
const makeArr0 = (x) => {
    return [x];
};
const array07 = makeArr0(5);
const array08 = makeArr0("a");
const array09 = makeArr0(true);
// 예시3에 Generic 적용 + 매개변수 2개
const makeArr = (x, y) => {
    return [x, y];
};
const array7 = makeArr(4, 5);
const array8 = makeArr(1, "a");
const array9 = makeArr(1, "a"); // 기본 타입으로 string 주고 생략해도 됨
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
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
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
