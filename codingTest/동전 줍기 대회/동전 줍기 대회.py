n = int(input())
c = list(map(int, input().split()))

dp = [0] * (n + 1)
dp[0] = c[0]

for i in range(1, n):
	dp[i] = max(0, dp[i - 1]) + c[i]
	
print(max(dp))