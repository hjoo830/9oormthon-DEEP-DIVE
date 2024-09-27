// 그래프를 인접 리스트로 표현
const graph = {
  1: [2, 3, 4],
  2: [1, 5, 6],
  3: [1, 7],
  4: [1],
  5: [2],
  6: [2],
  7: [3],
};

// BFS 구현
function bfs(graph, start) {
  const visited = new Set(); // 방문한 노드를 기록
  const queue = [start]; // BFS는 큐를 사용

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 첫 번째 요소를 꺼냄
    console.log(node);

    // 현재 노드와 인접한 모든 노드 확인
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // 방문하지 않은 인접 노드를 큐에 추가
      }
    }
  }
}

console.log("BFS 탐색 순서:");
bfs(graph, 1);
