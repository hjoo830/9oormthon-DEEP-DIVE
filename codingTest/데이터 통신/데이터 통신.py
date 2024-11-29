from collections import deque

n, m = map(int, input().split())
start, end = map(int, input().split())
adj = [[] for _ in range(n + 1)]
for i in range(m):
	a, b, k = map(int, input().split())
	adj[a].append((b, k))
	adj[b].append((a, k))

def bfs(s, e, n):
	q = deque()
	q.append((s, 1))
	v = [0] * (n + 1)
	v[s] = 1

	while q:
		c, size = q.popleft()
		if c == e:
			return size
		
		for n, l in adj[c]:
			if v[n] == 0 and size <= l:
				v[n] = 1
				q.append((n, size + 1))
		
	return -1

print(bfs(start, end, n))