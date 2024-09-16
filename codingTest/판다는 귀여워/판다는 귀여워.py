n, m, k = map(int, input().split(' '))
panda = []

for i in range(k):
	r, c = map(int, input().split(' '))
	panda.append((r, c))

minScore = float('inf')
for r in range(1, n + 1):
	for c in range(1, m + 1):
		if (r, c) in panda:
			continue
		score = 0
		for i in range(k):
			score += ((r - panda[i][0]) ** 2 + (c - panda[i][1]) ** 2)
		if minScore > score:
			minScore = score

print(minScore)