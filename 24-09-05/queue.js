class Queue {
  constructor() {
    this.items = [];
  }

  // 큐에 요소 추가
  enqueue(element) {
    this.items.push(element);
  }

  // 큐에서 요소 제거 및 반환
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // 큐의 앞 요소 확인
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // 큐가 비어 있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }
}
