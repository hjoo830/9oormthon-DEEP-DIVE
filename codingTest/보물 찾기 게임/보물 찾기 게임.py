from collections import deque

def bfs(s, targets, adj, n, e):
	q = deque([(s, 0)])
	v = [0] * (n + 1)
	v[s] = 1
	closest = -1
	minTime = float("inf")
	minToEnd = float("inf")
	
	while q:
		c, time = q.popleft()
		
		if time > minTime:
			continue
		
		if c in targets:
			distanceToEnd = bfsToEnd(c, e, adj, n)
			if time < minTime or (time == minTime and distanceToEnd < minToEnd):
				closest = c
				minTime = time
				minToEnd = distanceToEnd
		
		for nxt in adj[c]:
			if nxt <= n and v[nxt] == 0:
				q.append((nxt, time + 1))
				v[nxt] = 1
	
	if closest == -1:
		return -1, -1
	else:
		return closest, minTime

def bfsToEnd(s, e, adj, n):
	q = deque([(s, 0)])
	v = [0] * (n + 1)
	v[s] = 1
	
	while q:
		c, time = q.popleft()
		if c == e:
			return time
		
		for n in adj[c]:
			if v[n] == 0:
				q.append((n, time + 1))
				v[n] = 1
	return float("inf")

n, m, t, s, e = map(int, input().split(" "))
targets = list(map(int, input().split(" ")))
adj = [[] for _ in range(n + 1)]

for _ in range(m):
	start, end = map(int, input().split(" "))
	adj[start].append(end)
	
target, beforeTargetTime = bfs(s, targets, adj, n, e)

if target == -1:
	print(-1)
else:
	for i in range(1, n + 1):
		for j in adj[i]:
			if i not in adj[j]:
				adj[j].append(i)

	afterTargetTime = bfsToEnd(target, e, adj, n)
	if afterTargetTime == float("inf"):
		print(-1)
	else:
		print(target, beforeTargetTime + afterTargetTime)