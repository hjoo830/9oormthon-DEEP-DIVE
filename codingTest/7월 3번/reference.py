import sys
import heapq
input = sys.stdin.readline


n, m = map(int,input().split())
s, e, c = map(int, input().split())

s -= 1
e -= 1

vtx = [[] for _ in range(n)]

for i in range(m):
    u, v, x = map(int, input().split())
    u -= 1
    v -= 1
    x = (c + x - 1) // x
    vtx[u].append((x, v))
    vtx[v].append((x, u))

dis = [float('inf')] * n
dis[s] = 0

pq = []
heapq.heappush(pq, (0, s))

while pq:
    cur_cost, cur_node = heapq.heappop(pq)
    if cur_cost > dis[cur_node]:
        continue
    for cost, next_node in vtx[cur_node]:
        if cur_cost + cost < dis[next_node]:
            dis[next_node] = cur_cost + cost
            heapq.heappush(pq, (dis[next_node], next_node))

print(-1 if dis[e] == float('inf') else dis[e])