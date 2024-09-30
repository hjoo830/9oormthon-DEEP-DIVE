function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "서버로부터 받은 데이터";
      resolve(data);
    }, 2000);
  });
}

async function fetchDataWithAsyncAwait() {
  console.log("async/await로 데이터를 가져오는 중...");
  try {
    const data = await fetchDataWithPromise();
    console.log("가져온 데이터:", data);
  } catch (error) {
    console.log("에러 발생:", error);
  }
}

fetchDataWithAsyncAwait();
