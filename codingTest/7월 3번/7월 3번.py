import heapq

n, m = map(int, input().split(' '))
start, end, c = map(int, input().split(' '))
adj = [[] for _ in range(n + 1)]

for _ in range(m):
	s, e, k = map(int, input().split(' '))
	adj[s].append((e, k))
	adj[e].append((s, k))

def dijkstra(start, end, c):
	dist = [float('inf')] * (n + 1)	# 최소 비용을 저장할 리스트
	dist[start] = 0
	pq = [(0, start)]  # (현재까지의 비용, 현재 위치)

	while pq:
		cost, now = heapq.heappop(pq)
		# 이미 방문한 노드의 경우 스킵
		if dist[now] < cost:
			continue
		
		# 인접 노드를 확인
		for next_node, capacity in adj[now]:
			# c명이 지나갈 때의 비용 계산
			next_cost = cost + (c // capacity + (1 if c % capacity > 0 else 0))

			if next_cost < dist[next_node]:
				dist[next_node] = next_cost
				heapq.heappush(pq, (next_cost, next_node))
			
	return dist[end]

result = dijkstra(start, end, c)
if result == float('inf'): print(-1)
else: print(result)