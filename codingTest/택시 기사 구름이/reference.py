import sys
from collections import deque
input = sys.stdin.readline
N, M = map(int, input().split())
X, Y, Z = map(int, input().split())

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def get_distance(a, b, c, d):

    visited = [[float('inf') for _ in range(N)] for _ in range(N)]
    visited[b][a] = 0
    q = deque()
    q.append([b, a])

    while q:
        cy, cx = q.popleft()
        for k in range(4):
            nx = cx + dx[k]
            ny = cy + dy[k]
            if 0 <= nx < N and 0 <= ny < N and matrix[ny][nx] != 1:
                if visited[ny][nx] > visited[cy][cx] + 1:
                    visited[ny][nx] = visited[cy][cx] + 1
                    q.append([ny, nx])
    return visited[d][c]


matrix = list()
for _ in range(N):
    matrix.append(list(map(int, input().split())))
ans = 0
previous_x, previous_y = -1, -1
for _ in range(M):
    a, b, c, d = map(int, input().split())
    a, b, c, d = a-1, b-1, c-1, d-1  # Adjust for 0-based indexing
    move, take = 0, 0

    if previous_x != -1 and previous_y != -1:
        move = get_distance(previous_x, previous_y, a, b)

    take = get_distance(a, b, c, d)
    previous_x, previous_y = c, d

    ans -= (move + take) * Z
    ans += X
    if 5 < take:
        ans += (take - 5) * Y

print(ans)