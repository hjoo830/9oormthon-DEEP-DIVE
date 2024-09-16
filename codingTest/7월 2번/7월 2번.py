n, m = map(int, input().split(' '))
height = list(map(int, input().split(' ')))
overlap = [0] * m 

# 세로 색칠 칸 수
for i in range(n):
	if height[i] > 0:
		for j in range(m-height[i], m):
			overlap[j] += 1
	elif height[i] < 0:
		for j in range(-height[i]):
			overlap[j] += 1

min = min(overlap)
line = overlap.count(min)

print(min, line)