n = int(input())
scores = []

for _ in range(n):
	d, s = map(int, input().split())
	scores.append((d, s))


winCount = [0] * n

for r in range(1, 100):
	maxScore = -1
	winner = 0

	for i in range(n):
		d, s = scores[i]
		totalScore = (d * r / 100) + (s * (100 - r) / 100)

		if totalScore > maxScore:
			maxScore = totalScore
			winner = i
		elif totalScore == maxScore and i < winner:
			winner = i
	
	winCount[winner] += 1

for count in winCount:
	print(count, end=' ')