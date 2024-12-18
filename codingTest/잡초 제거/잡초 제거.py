n, q = map(int, input().split())
size = list(map(int, input().split()))
for i in range(q):
	op, a, b = map(int, input().split())
	if op == 1:
		print(sum(size[a - 1:b]))
	if op == 2:
		size[a - 1] += b
	if op == 3:
		size[a - 1] -= b