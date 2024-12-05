"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.23;
// String
let string;
let firstName = "Hyoju";
let lastName = "Hwang";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["Hyoju", "Gildong"];
let names2 = ["Hyoju", "Gildong"];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ["Hyoju", 1, 2];
let array2 = ["Hyoju", 1, 2];
// 여러 타입을 단언 X any
let someArray = ["Hyoju", 1, {}, [], false];
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// 읽기 전용이라서 에러 남
// stringArray.push("C");
// numberArray[0] = 3;
// Tuple
// 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이를 지켜야 한다.
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2]; // 길이 안맞아서 error
// tuple1 = [1, "a"]; // 타입 순서 안맞아서 error
// 튜플 타입의 배열(2차원 배열)
let users;
users = [
    [1, "hyoju"],
    [2, "Gildong"],
];
// push() 등을 통해 값을 넣는 것은 가능
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2); // ['a', 1, 2]
// tuple2.push(true) // [string, number]로 정의된 배열에 boolean 값을 추가하려고 해서 error
