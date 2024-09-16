import sys
input = sys.stdin.readline

N, M, K = map(int, input().split())
list_K = list()

matrix = [[0 for _ in range(M+1)] for _ in range(N+1)]
for _ in range(K):
    x, y = map(int, input().split())
    list_K.append([x, y])


total = 10e9

for i in range(1, N+1):
    for j in range(1, M+1):
        temp_score = 0
        if [i, j] not in list_K:
            for panda in list_K:
                temp_score += ((i - panda[0])**2 + (j - panda[1])**2)
            total = min(total, temp_score)

print(total)