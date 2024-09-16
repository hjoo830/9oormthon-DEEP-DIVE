n = int(input())
file = [('root', 0, None)]
depth = 0
current = 'root'

for i in range(n):
	command = input().split(' ')
	if command[0] == 'mkdir':
		# 같은 이름의 폴더가 현재 폴더에 있는지 확인
		exists = False
		for f in file:
				if f[0] == command[1] and f[1] == depth + 1 and f[2] == current:
						exists = True
						break
		if not exists:
			file.append((command[1], depth + 1, current))

	elif command[0] == 'cd':
		for f in file:
			if f[0] == command[1] and f[1] == (depth + 1) and f[2] == current:
				current = f[0]
				depth += 1
				break
	
	elif command[0] == 'cd..':
		if depth > 0:
			for f in file:
				if f[0] == current and f[1] == depth:
					current = f[2]
					break
			depth -= 1

# print(file)
def print_structure(current, depth):
	for f in sorted(file, key=lambda x: (x[1], x[0])):
		if f[2] == current and f[1] == depth: 
			print(' ' * depth + f[0])
			print_structure(f[0], depth + 1)

print('root')
print_structure('root', 1)
