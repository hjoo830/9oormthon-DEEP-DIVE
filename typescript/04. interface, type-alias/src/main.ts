// interface
interface People1 {
  name: string;
  age: number;
}

// type alias
type People2 = {
  name: string;
  age: number;
};

const me: People2 = {
  name: "hyoju",
  age: 23,
};

// interface는 extends를 이용해 확장
interface Animal1 {
  name: string;
}

interface Bear1 extends Animal1 {
  honey: boolean;
}

const bear1: Bear1 = {
  name: "honey bear",
  honey: true,
};

// type alias는 Intersection Operator를 이용해 확장
type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: Boolean;
};

const bear2: Bear2 = {
  name: "honey bear",
  honey: true,
};

// 선언 병합(Declaration Merging)
// interface만 가능. type alias는 안됨
interface Animal3 {
  name: string;
}

interface Animal3 {
  honey: boolean;
}

const bear3: Animal3 = {
  name: "honey bear",
  honey: true,
};
