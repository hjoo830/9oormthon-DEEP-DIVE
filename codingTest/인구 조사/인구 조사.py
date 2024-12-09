n, s = map(int, input().split())
people = []
for _ in range(n):
	row = list(map(int, input().split()))
	people.append(row)
	
answer = n + 1

for k in range(1, n + 1):
	found = False
	for x in range(n - k + 1):
		for y in range(n - k + 1):
			total = 0
			for i in range(x, x + k):
				for j in range(y, y + k):
					total += people[i][j]
			if total >= s:
				answer = k
				found = True
				break
		if found:
			break
	if found:
		break

if answer == n + 1:
	print(-1)
else:
	print(answer + 1)