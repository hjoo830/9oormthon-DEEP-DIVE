import sys
input = sys.stdin.readline

# T 입력 받기
T = int(input())

# 총 황금비의 개수 (Golden_Ratio)
GR = 0

'''
A, B를 T회 입력 받았을 때, 각 회마다 둘 중 큰 수가, 작은 수의 1.60배 이상, 1.63배 이하면 황금비입니다.
다만, 실수로 계산할 경우 실수 오차가 발생할 수 있기 때문에 100을 곱하여 정수로 변환한 후 계산해야 합니다.
'''

for _ in range(T):
    # A, B 입력 받기
    A, B = map(int, input().split())

    # 비율과 큰 수에 각각 100을 곱하여 계산해야 한다.
    if min(A, B) * 160 <= max(A, B) * 100 <= min(A, B) * 163:
        GR += 1

print(GR)