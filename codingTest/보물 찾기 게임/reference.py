import sys
from collections import deque
input = sys.stdin.readline

N, M, T, S, E = map(int, input().split())
treasureNodes = list(map(int, input().split()))
graph = [[ 0 for _ in range(N+1)] for _ in range(N+1)]
for _ in range(M):
    s, e = map(int, input().split())
    graph[s][e] = 1
    if graph[e][s] == 1:
        continue
    else:
        graph[e][s] = 2
treasureVisited = [[i, 10e8] for i in range(N+1)]

# S번 마을에서 가장 가까운 보물을 가진 마을을 찾는 과정
q = deque()
q.append(S)
treasureVisited[S][1] = 0
while q:
    currentNode = q.popleft()
    for nextNode in range(1, N+1):
        if graph[currentNode][nextNode] == 1:
            if treasureVisited[nextNode][1] > treasureVisited[currentNode][1] + 1:
                q.append(nextNode)
                treasureVisited[nextNode][1] = treasureVisited[currentNode][1] + 1

# S번 마을에서 가장 가까운 보물 후보 마을을 찾는 과정
f_visited = list(filter(lambda x : x[0] in treasureNodes, treasureVisited[1:]))
s_visited = sorted(f_visited, key = lambda x : (x[1], x[0]))
visited = list(filter(lambda x : x[1] == s_visited[0][1], s_visited))

# 보물 후보 마을에서 E번 마을까지 가장 가까운 마을을 찾는 탐색
TN = -1
TNV = 10e8
for i in range(len(visited)):
    cand = visited[i]
    q = deque()
    q.append(cand[0])
    eVisited = [10e8 for _ in range(N+1)]
    eVisited[cand[0]] = 0

    while q:
        currentNode = q.popleft()
        for nextNode in range(1, N+1):
            if graph[currentNode][nextNode] > 0:
                if eVisited[nextNode] > eVisited[currentNode] + 1:
                    q.append(nextNode)
                    eVisited[nextNode] = eVisited[currentNode] + 1
    if eVisited[E] < TNV:
        TNV = eVisited[E]
        TN = i

res = TNV + visited[TN][1]

# 만약에, 보물 마을에 방문한 적 없거나, E번 마을에 도착할 수 없다면 -1을 출력하시오.
if res >= 10e8:
    print(-1)
else:
    print(visited[TN][0], res)