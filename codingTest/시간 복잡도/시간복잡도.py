n = int(input())
count = 0
i = 5
# 5 배수 세기
while n // i:
	count += n // i
	i *= 5
print(count)
