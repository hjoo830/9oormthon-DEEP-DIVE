import sys
input = sys.stdin.readline

N = int(input())
D = []
S = []
for _ in range(N):
    Di, Si = map(int, input().split())
    D.append(Di)
    S.append(Si)

# 가능한 모든 반영 비율은 1 이상 99 이하의 모든 정수이다.
# 이에 대해 각 참가자의 총점수를 계산해 일등이 누군지 알아내면 된다.
ct = [0] * N
for r in range(1, 100):
    res1 = res2 = 0 # 일등 참가자의 점수와 번호

    # i번 참가자의 총점수는 (r / 100) * D[i] + ((100 - r) / 100) * S[i]이다.
    # 여기서 실수 오차를 없애기 위해 총점수에 100을 곱하면 r * D[i] + (100 - r) * S[i]가 된다.
    # 위와 같이, 모든 참가자의 총점수에 100을 곱해서 비교하면 된다.
    for i in range(N):
        score = r * D[i] + (100 - r) * S[i]
        if res1 < score:
            res1 = score
            res2 = i

    # 일등인 참가자의 일등으로 뽑힌 횟수를 1만큼 증가시킨다.
    ct[res2] += 1

# 1번부터 차례대로 일등으로 뽑힌 횟수를 출력한다.
for i in range(N):
    print(ct[i], end = ' ')