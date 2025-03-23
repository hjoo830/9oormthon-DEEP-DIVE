import sys
import heapq
from math import ceil

n, m = map(int, input().split())
s, e, c = map(int, input().split())

graph = [[] for _ in range(n + 1)]
for i in range(2, 2 + m):
	a, b, k = map(int, input().split())
	graph[a].append((b, k))
	graph[b].append((a, k))

def dijkstra(start):
	INF = float('inf')
	cost = [INF] * (n + 1)
	cost[start] = 0
	pq = [(0, start)]

	while pq:
		cur_cost, room = heapq.heappop(pq)
		if cur_cost > cost[room]:
			continue

		for next_room, k in graph[room]:
			move_cost = ceil(c / k)
			new_cost = cur_cost + move_cost

			if new_cost < cost[next_room]:
				cost[next_room] = new_cost
				heapq.heappush(pq, (new_cost, next_room))

	return cost

result = dijkstra(s)[e]

print(result if result != float('inf') else -1)
