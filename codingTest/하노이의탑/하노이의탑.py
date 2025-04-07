k = int(input())

bar = [[], [], []]

for i in range(20, 0, -1):
	bar[0].append(i)

count = 0
end = False

def hanoi(n, s, e, temp):
	global count, k, end
	if n == 0 or end: return

	hanoi(n - 1, s, temp, e)

	if end: return

	bar[e].append(bar[s].pop())
	count += 1

	if count == k:
		end = True
		return

	hanoi(n - 1, temp, e, s)

hanoi(20, 0, 2, 1)

for b in bar:
	print(sum(b), end=' ')
