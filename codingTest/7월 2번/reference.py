# Python3
import sys
input = sys.stdin.readline
from bisect import bisect_left


W, H = map(int, input().split())
arr = list(map(int, input().split()))

down = []
up = []

for i in arr:
    if i < 0:
        up.append(-i)
    else:
        down.append(i)

up.sort()
down.sort()

min_count = W
range_count = 0

# 이분 탐색 함수

for i in range(1, H+1):
    down_count = len(down) - bisect_left(down, i)
    top_count = len(up) - bisect_left(up, H - i + 1)

    if min_count == down_count + top_count:
        range_count += 1
    elif min_count > down_count + top_count:
        range_count = 1
        min_count = down_count + top_count

print(min_count, range_count)