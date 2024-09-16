import sys
input = sys.stdin.readline

N, M, X = map(int, input().split())
trees = list(map(int, input().split()))
Q = int(input())
commands = list(map(str, input().split()))

cur_idx = X - 1
total = 0
for i in range(Q):
    if trees[cur_idx] + i >= M:
        total += (trees[cur_idx] + i)
        trees[cur_idx] -= (trees[cur_idx] + i)

    if commands[i] == 'L':
        cur_idx = (cur_idx - 1 + N) % N
    elif commands[i] == 'R':
        cur_idx = (cur_idx + 1) % N
print(total)