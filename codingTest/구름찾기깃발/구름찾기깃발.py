n, k = map(int, input().split())
grid = []
for _ in range(n):
	row = list(map(int, input().split()))
	grid.append(row)

# 개수 적어야되니까 1인 깃발과 구분하기 위해 구름은 -1로 표현
for i in range(n):
	for j in range(n):
		if grid[i][j] == 1:
			grid[i][j] = -1

def getCount(r, c):  # (r,c) 좌표를 기준으로 주위 8칸 내에 구름 개수 세는 함수
	count = 0
	d = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
	for dr, dc in d:
		nr, nc = r + dr, c + dc
		if 0 <= nr < n and 0 <= nc < n:
			if grid[nr][nc] == -1:
				count += 1
	return count


for i in range(n):
	for j in range(n):
		if grid[i][j] == 0: 
			grid[i][j] = getCount(i, j)

answer = 0
for i in range(n):
	for j in range(n):
		if grid[i][j] == k:
			answer += 1
print(answer)
