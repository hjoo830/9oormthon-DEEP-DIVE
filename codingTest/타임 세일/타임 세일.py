a, b, c = map(int, input().split(' '))

if a < b:
	if a < c < b: 
		print('No')
	else: 
		print('Yes')

else: # a > b
	if c < b or c > a: 
		print('No')
	else: 
		print('Yes')