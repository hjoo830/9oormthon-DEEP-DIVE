from collections import deque

n, m, t = list(map(int, input().split()))
graph = []
for i in range(n):
	s = list(map(int, input().split()))
	graph.append(s)
print(graph)

def bfs(xs, ys, graph):
	dx = [-1, 1, 0, 0]
	dy = [0, 0, -1, 1]

	q = deque([(xs, ys)])
	v = set([(xs, ys)])
	k = 0

	while q:
		x, y = q.popleft()

		for i in range(4):
			nx = x + dx[i]
			ny = y + dy[i]

			if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]):
				if (nx, ny) not in v:
					v.add((nx, ny))
					q.append((nx, ny))
					print(v)
	return k

print(bfs(0, 0, graph))