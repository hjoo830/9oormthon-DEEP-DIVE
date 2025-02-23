t = int(input())
count = 0

def isGold(a, b):
	global count
	s, l = min(a, b), max(a, b)
	if 1.6 * s <= l <= 1.63 * s:
		count += 1
	return count

for _ in range(t):
	a, b = map(int, input().split())
	isGold(a, b)
print(count)
