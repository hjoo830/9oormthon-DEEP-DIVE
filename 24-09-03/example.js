// if-else 조건문
let number = 10;

if (number > 0) {
  console.log("양수");
} else if (number < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// switch 조건문
let day = 3;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 입력");
}

// for 반복문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while 반복문
let count = 0;

while (count < 5) {
  console.log("Count:", count);
  count++;
}