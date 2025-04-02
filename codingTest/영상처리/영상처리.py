import sys
from collections import deque

n, m = map(int, input().split())
grid = []

for _ in range(m):
	row = list(input().strip())
	grid.append(row)

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
	queue = deque([(x, y)])
	grid[x][y] = '.'
	size = 1

	while queue:
		cx, cy = queue.popleft()

		for d in range(4):
			nx, ny = cx + dx[d], cy + dy[d]

			if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == '#':
				queue.append((nx, ny))
				grid[nx][ny] = '.'
				size += 1

	return size

object_count = 0
max_size = 0

for i in range(m):
	for j in range(n):
		if grid[i][j] == '#':
			object_count += 1
			max_size = max(max_size, bfs(i, j))

print(object_count)
print(max_size)
