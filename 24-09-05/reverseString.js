import Stack from "./stack.js";

function reverseString(str) {
  let stack = new Stack();

  // 문자열을 스택에 하나씩 추가
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // 스택에서 요소를 하나씩 꺼내서 새로운 문자열로 합침
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// 테스트
const input = "hello";
console.log(reverseString(input));
