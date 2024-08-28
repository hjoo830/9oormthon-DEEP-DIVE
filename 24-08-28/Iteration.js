for (let i = 1; i <= 10; i++) {
  // i가 5일 때
  if (i === 5) {
    console.log("5는 건너뛰기");
    continue; // 아래 코드를 실행하지 않고 다음 반복으로 넘어감
  }

  // i가 8일 때
  if (i === 8) {
    console.log("8에서 루프 종료");
    break; // 루프를 완전히 종료
  }

  console.log("현재 숫자:", i);
}
