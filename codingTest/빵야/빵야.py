n = int(input())
h = list(map(int, input().split(" ")))
shot = 0

for i in range(1, n + 1):
	while (h[i - 1] > 0):
		shot += 1
		minus = ((shot - 1) % 4) + 1
		h[i - 1] -= minus

print(shot)