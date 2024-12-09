// Keyof
// 제공된 타입의 키를 추출해 새로운 Union 유형 반환
interface IUser {
  name: string;
  age: number;
  address: string;
}

type UserKeys = keyof IUser; // 'name' | 'age' | 'address'

// typeof 연산자와 함께 사용하면 keyof 연산자는 객체의 모든 키에 대한 union 형식을 반환
// user는 type이 아니라 object이기 때문에 먼저 typeof를 사용해 객체의 type을 가져온 다음 keyof를 사용해 해당 키를 추출해야 한다
const user = {
  name: "Hyoju",
  age: 23,
  address: "Daegu",
};

type UserKeys1 = keyof typeof user; // 'name' | 'age' | 'address'

// enum에서 모든 키를 추출하려면 keyof 연산자와 typeof 연산자의 조합을 사용해야 한다
enum UserRole {
  admin,
  manager,
}

type UserKeys2 = keyof typeof UserRole; // 'admin' | 'manager'
