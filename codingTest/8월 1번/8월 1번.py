n = int(input().strip())
a = list(map(int, input().split()))

cookies = [(a[i], i + 1) for i in range(n)]
cookies.sort()

for i in range(n):
    if cookies[i][0] - i <= 0:
        print(' '.join(map(str, range(1, n + 1))))
        break
else:
    print(' '.join(str(cookie[1]) for cookie in cookies))
