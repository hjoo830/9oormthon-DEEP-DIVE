function permute(nums) {
  const result = [];
  const used = Array(nums.length).fill(false); // 숫자가 사용됐는지 추적

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]); // 순열 완성 시 결과에 추가
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // 이미 사용한 숫자는 건너뜀
      path.push(nums[i]); // 숫자 선택
      used[i] = true; // 선택된 숫자 표시
      backtrack(path); // 다음 자리 숫자 선택을 위한 재귀 호출
      path.pop(); // 백트래킹: 선택한 숫자 제거
      used[i] = false; // 선택 취소
    }
  }

  backtrack([]); // 빈 배열로 시작
  return result;
}

console.log(permute([1, 2, 3]));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
