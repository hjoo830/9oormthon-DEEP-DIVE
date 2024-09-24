class Book {
  // 생성자: 인스턴스가 생성될 때 실행되는 함수
  constructor(title, author) {
    this.title = title; // 책 제목
    this.author = author; // 저자
  }

  // 메소드: 책 정보를 출력
  read() {
    return `책 '${this.title}'를 읽고 있습니다.`;
  }

  getAuthor() {
    return `이 책의 저자는 ${this.author}입니다.`;
  }
}

const myBook = new Book("모던 자바스크립트 Deep Dive", "이웅모"); // 인스턴스 생성

console.log(myBook.read()); // "책 '모던 자바스크립트 Deep Dive'를 읽고 있습니다."
console.log(myBook.getAuthor()); // "이 책의 저자는 이웅모입니다."
