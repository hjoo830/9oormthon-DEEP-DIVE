n, m = map(int, input().split(' '))
a = list(map(int, input().split(' ')))
adj = [[] for _ in range(m + 1)]
answer = -1
for i in range(m):
	s, e = map(int, input().split(' '))
	adj[s].append(e)
	adj[e].append(s)
	
def dfs(s):
	q = []
	q.append(s)
	
	v[s] = 1
	result.append(s)
	
	while q:
		c = q.pop(0)
		for n in adj[c]:
			if v[n] == 0:
				q.append(n)
				result.append(n)
				v[n] = 1
	
v = [0] * (n + 1)
result = []
dfs(1)

for lang in set(a):
	count = 0
	for i in result:
		if a[i-1] == a[0] or a[i-1] == lang:
			count += 1
	if answer < count:
		answer = count

print(answer)
	