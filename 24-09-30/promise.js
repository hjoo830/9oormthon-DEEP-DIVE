function fetchDataWithPromise() {
  console.log("Promise로 데이터를 가져오는 중...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "서버로부터 받은 데이터";
      resolve(data);
    }, 2000);
  });
}

function processData(data) {
  console.log("가져온 데이터:", data);
}

fetchDataWithPromise()
  .then(processData)
  .catch((error) => console.log("에러 발생:", error));
