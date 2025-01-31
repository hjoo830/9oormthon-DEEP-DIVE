xs, ys = map(int, input().split())
n = int(input())
water = [] * (n + 1)

for _ in range(n):
	x, y = map(int, input().split())
	water.append((x, y))

q = int(input())
c = input().split()
	
x = xs
y = ys

control = ['L', 'R', 'U', 'D']
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

for ctrl in c:
	i = control.index(ctrl)
	x += dx[i]
	y += dy[i]

	if (x, y) in water:
		x -= dx[i]
		y -= dy[i]

print(x, y)
