n, m = map(int, input().split(' '))
height = list(map(int, input().split(' ')))
overlap = [0] * (m + 1)

# 세로 색칠 칸 수
for i in range(n):
	if height[i] > 0: # 아래에서 위로
		start = m - height[i] # 시작점
		overlap[start] += 1
		overlap[m] -= 1

	elif height[i] < 0: # 위에서 아래로
		end = -height[i] # 끝점
		overlap[0] += 1
		overlap[end] -= 1

# 각 줄에서 겹치는 칸을 계산
current = 0
min = n
line = 0
for i in range(m):
	current += overlap[i]  # 누적합 계산
	if current < min:
		min = current
		line = 1  # 최소값이 갱신되면 카운트 초기화
	elif current == min:
		line += 1

print(min, line)