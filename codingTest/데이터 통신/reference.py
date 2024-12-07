import sys
input = sys.stdin.readline
from collections import deque

N, M = map(int, input().split())
S, E = map(int, input().split())

# 통신 케이블은 두 통신탑을 잇는 형태이므로, 그래프로 나타낼 수 있다.
graph = [[] for _ in range(N + 1)]
for _ in range(M):
    a, b, k = map(int, input().split())
    graph[a].append((b, k))
    graph[b].append((a, k))

# 간선을 따라 움직일 때마다 데이터의 크기는 1 증가한다. 이는 간선의 가중치가 1인 것으로 간주할 수 있다.
# 모든 간선의 가중치가 1인 그래프에서의 최단 거리는 BFS로 구할 수 있다.
dq = deque()
dq.append(S)
dist = [-1] * (N + 1) # -1은 방문하지 않은 상태다.
dist[S] = 1 # 데이터의 크기는 처음에 1이다.

while dq:
    cur = dq.popleft()
    for nxt, k in graph[cur]:
        # nxt번 통신탑에는 방문하지 않은 상태이며, cur번 통신탑에서의 데이터의 크기가 k 이하여야 한다.
        if dist[nxt] == -1 and dist[cur] <= k:
            dq.append(nxt)
            dist[nxt] = dist[cur] + 1

print(dist[E])