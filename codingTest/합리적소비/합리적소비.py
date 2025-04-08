n = int(input())
d = {}
for _ in range(n):
	s, p = input().split()
	d[s] = int(p)

maxItem = ['', 0]
minItem = ['', 100001]
for i in d:
	if maxItem[1] < d[i]:
		maxItem[1] = d[i]
		maxItem[0] = i
		
	if minItem[1] > d[i]:
		minItem[1] = d[i]
		minItem[0] = i
	
print(maxItem[0], maxItem[1])
print(minItem[0], minItem[1])