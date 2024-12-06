interface getLikeNumber {
  // 호출 시그니처
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post0: Post = {
  id: 1,
  title: "post 1",
  getLikeNumber(like: number) {
    return like;
  },
};

post0.getLikeNumber(1);

// 인덱스 시그니처
// 객체 인덱스 시그니처
interface Post1 {
  [key: string]: unknown; // 이름을 알지 못하는 새로운 속성이 추가될 때 인덱스 시그니처 사용
  id: number;
  title: string;
}

const post1: Post1 = {
  id: 1,
  title: "post 1",
};

// interface에 [key: string]: unknown; 가 없었다면 에러
post1["description"] = "post1 description";
post1["pages"] = 300;

// 배열 인덱스 시그니처
interface Names {
  [item: number]: string;
}

const userNames: Names = ["Hyoju", "Gildong", "Yuri"];

userNames[0] === "Hyoju";
userNames[1] === "Gildong";
