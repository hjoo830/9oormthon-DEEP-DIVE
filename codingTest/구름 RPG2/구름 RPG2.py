# 내 갑옷 고유값이 상대 무기 고유값보다 크고, 배수이면(나누어떨어지면) H 감소(판타스틱x)
# 판타스틱갑옷이 되려면? 어떤 수로도 나누어떨어지지말것(소수)
# 갑옷 변형 시스템은 갑옷 고유값 -= 1 (최소값 2)
n = int(input())

def isPrime(a):
	if a == 2:
		return True
	if a % 2 == 0:
		return False
	for i in range(3, int(a ** 0.5) + 1, 2):
		if a % i == 0:
			return False
	return True

for _ in range(n):
	a = int(input())
	count = 0
	if isPrime(a):
		print(0)
	else:
		while not isPrime(a):
			if a < 2:
				count = -1
				break
			a -= 1
			count += 1
		print(count)
