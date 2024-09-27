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

// DFS 구현 (재귀 방식)
function dfs(graph, start, visited = new Set()) {
  // 시작 노드 방문 처리
  visited.add(start);
  console.log(start);

  // 현재 노드에서 인접한 노드를 재귀적으로 방문
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

console.log("DFS 탐색 순서:");
dfs(graph, 1);
