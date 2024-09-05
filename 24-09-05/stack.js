class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  // 스택에서 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // 스택의 가장 위 요소 확인
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // 스택이 비어 있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }
}

export default Stack;
