n, m, x = map(int, input().split())
h = list(map(int, input().split()))
q = int(input())
d = input().split()

wood = 0
current = int(x)
for i in range(q):
	if h[current - 1] >= m:
		wood += h[current - 1]
		h[current - 1] = 0

	if d[i] == 'L':
		if current == 1:
			current = n
		else:
			current -= 1
			
	if d[i] == 'R':
		if current == n:
			current = 1
		else:
			current += 1
			
	if d[i] == 'S':
		current = current
		
	for j in range(len(h)):
		h[j] += 1
print(wood)
		