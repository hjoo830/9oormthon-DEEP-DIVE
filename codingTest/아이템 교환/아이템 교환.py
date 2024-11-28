n, m = map(int, input().split())
myItems = input().split()
friendItems = input().split()

for i in range(m):
	a, b = input().split()
	if a in myItems and b in friendItems:
		myItems.remove(a)
		friendItems.remove(b)
		myItems.append(b)
		friendItems.append(a)

myItems.sort()
print(*myItems)