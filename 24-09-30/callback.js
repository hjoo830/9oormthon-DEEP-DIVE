function fetchDataWithCallback(callback) {
  console.log("데이터를 가져오는 중...");
  setTimeout(() => {
    const data = "서버로부터 받은 데이터";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("가져온 데이터:", data);
}

fetchDataWithCallback(processData);
