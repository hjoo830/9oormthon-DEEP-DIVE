
import sys
input = sys.stdin.readline
from math import inf

# (i1, j1)부터 (i2, j2)까지의 합
def range_sum(i1, j1, i2, j2):
    return B[i2][j2] - B[i1 - 1][j2] - B[i2][j1 - 1] + B[i1 - 1][j1 - 1]

# 임의의 K에 대해, 모든 구획에 포함된 사람의 수의 최솟값을 구하는 함수
def f(K):
    res = inf
    for i in range(1, N - K + 2):
        for j in range(1, N - K + 2): # (i, j)부터 (i + K - 1, j + K - 1)까지의 합을 구한다.
            res = min(res, range_sum(i, j, i + K - 1, j + K - 1))
    return res

N, S = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(N)]

# 임의의 크기의 구획에 포함된 사람의 수를 여러 번 구해야 한다.
# 그래서 누적 합 배열을 만들어서 O(1)에 구간 합을 구해야 한다.
B = [[0] * (N + 1) for _ in range(N + 1)]
for i in range(1, N + 1):
    for j in range(1, N + 1):
        B[i][j] = B[i - 1][j] + B[i][j - 1] - B[i - 1][j - 1] + A[i - 1][j - 1]

# 각 칸에 거주하는 사람 수는 음이 아닌 정수이다.
# 그래서 구획의 크기가 커질 수록, 구획에 포함되는 사람의 최솟값은 반드시 같거나 커진다.
# 구획의 크기를 K, 크기 K의 구획에 포함되는 사람의 최솟값을 f(K)라 한다면
# f(K) >= S을 만족하는 최소 K를 구해야 한다.
# K에 따라 f(K)는 단조증가를 하므로, 구획의 크기의 가능한 범위인 [1, N]에서 이분 탐색으로 조건을 만족하는 최소 K를 찾을 수 있게 된다.
start = 1 # 범위의 왼쪽 끝
end = N # 범위의 오른쪽 끝
res = -1 # 조건을 만족하는 K 중 최솟값
while start <= end:
    mid = (start + end) // 2
    if f(mid) >= S: # S보다 같거나 크다면 조건을 만족한다.
        res = mid # 현재 값을 저장한다.
        end = mid - 1 # mid보다 큰 값은 더 이상 고려할 필요가 없다.
    else:
        start = mid + 1 # 조건을 만족하지 않으므로 mid보다 작은 값은 더 이상 고려할 필요가 없다.

print(res)