import itertools

n = int(input())
s = sorted(list(map(int, input().split(' '))))
answer = 0

for combi in itertools.combinations(s, 3):
	if combi[2] <= (combi[0] + combi[1]):
		answer += 1
print(answer)