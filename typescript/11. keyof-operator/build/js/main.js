"use strict";
// typeof 연산자와 함께 사용하면 keyof 연산자는 객체의 모든 키에 대한 union 형식을 반환
// user는 type이 아니라 object이기 때문에 먼저 typeof를 사용해 객체의 type을 가져온 다음 keyof를 사용해 해당 키를 추출해야 한다
const user = {
    name: "Hyoju",
    age: 23,
    address: "Daegu",
};
// enum에서 모든 키를 추출하려면 keyof 연산자와 typeof 연산자의 조합을 사용해야 한다
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
