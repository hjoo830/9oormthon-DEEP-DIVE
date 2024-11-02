from collections import deque

def bfs(s):
	q = deque([s])
	v[s] = 1
	group = set([s])
	
	while q:
		c = q.popleft()
		for friend in already[c]:
			if v[friend] == 0:
				v[friend] = 1
				q.append(friend)
				group.add(friend)
	
	return group

n = int(input())
m = int(input())
already = [[] for _ in range(n + 1)]
for _ in range(m):
	s, e = map(int, input().split(" "))
	already[s].append(e)
	already[e].append(s)

edges = []
k = int(input())
for _ in range(k):
	u, v, w = map(int, input().split(" "))
	edges.append((w, u, v))
edges.sort()

v = [0] * (n + 1)
groups = []
for i in range(1, n + 1):
	if v[i] == 0:
		group = bfs(i)
		groups.append(group)

total = 0
groupCount = len(groups)

for time, u, v in edges:
	groupU = None
	groupV = None
	
	for group in groups:
		if u in group:
			groupU = group
		
		if v in group:
			groupV = group
		
		if groupU and groupV:
			break
	
	if groupU != groupV:
		new = groupU.union(groupV)
		groups.remove(groupU)
		groups.remove(groupV)
		groups.append(new)
		
		total += time
		groupCount -= 1
		
		if groupCount == 1:
			break
	
if groupCount == 1:
	print(total)
else:
	print(-1)