n, m, k = map(int, input().split())
graph = [[] for _ in range(m + 1)]
INF = float('inf')

for _ in range(m):
	a, b, c = map(int, input().split())
	graph[a].append((b, c))
	graph[b].append((a, c))

print(graph)

