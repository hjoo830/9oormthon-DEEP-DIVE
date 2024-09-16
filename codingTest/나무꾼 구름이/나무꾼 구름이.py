n, m, x = map(int, input().split(' '))
h = list(map(int, input().split(' ')))
q = int(input())
d = list(input().split(' '))

wood = 0
tree = x - 1
for i in range(q):
	if h[tree] + i >= m:
		wood += (h[tree] + i)
		h[tree] -= (h[tree] + i)

	if d[i] == 'L':
		tree = (tree - 1 + n) % n 
	elif d[i] == 'R':
		tree = (tree + 1) % n
	
print(wood)