// Partial, Pick, Omit, Exclude, Required...

// Partial => 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
  email: string;
  address: string;
}

type MyEmail = Partial<Address>;

const me: MyEmail = {};
const you: MyEmail = { email: "abc@example.com" };
const all: MyEmail = { email: "abc@example.com", address: "abc" };

// Pick 특정 타입에서 몇 개의 속성을 선택해 타입을 정의
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// const todo: Todo = {
//   title: "clean room",
//   // description속성이 없어서 error
//   completed: false,
// };

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "clean room",
  completed: false,
};

// Omit 특정 속성만 제거한 타입을 정의. Pick의 반대
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

// const todo1: Todo = {
//   title: "clean room",
//   completed: false,
//   createAt: 20241209,
// };

type TodoPreview1 = Omit<Todo, "description">;

const todo1: TodoPreview1 = {
  title: "clean room",
  completed: false,
  createAt: 20241209,
};

// Required
// 원래 유형이 일부 속성을 선택 사항으로 정의한 경우에도 객체에 Required 속성이 있는지 확인해야 하는 경우
type User = {
  firstName: string;
  lastName?: string;
};

let firstUser: User = {
  firstName: "Hyoju",
};

// let secondUser: Required<User> = {
//   firstName: "Hyoju",
//   // Required된 유저에는 무조건 lastName도 있어야해서 error
// };

// Record<Keys, Type>
// 속성 키가 Keys이고 속성 값이 Type인 객체 type을 구성한다
// type의 속성을 다른 type에 매핑하는데 사용할 수 있다
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// ReturnType
// 함수 T의 반환타입으로 구성된 타입을 만든다
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "string";
// const b: ReturnType<typeof fn> = true; // error
