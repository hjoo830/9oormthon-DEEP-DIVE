def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            # 현재 아이템의 무게가 가방 용량을 초과하는 경우
            if weights[i - 1] > w:
                dp[i][w] = dp[i - 1][w]
            else:
                # 현재 아이템을 포함했을 때와 포함하지 않았을 때의 가치 중 큰 값 선택
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])

    return dp[n][capacity]

weights = [1, 2, 3, 4]
values = [10, 20, 30, 40]
capacity = 6

print(f"최대 가치: {knapsack(weights, values, capacity)}")
