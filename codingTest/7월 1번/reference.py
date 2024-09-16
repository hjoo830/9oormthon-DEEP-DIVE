# Python3
import sys
input = sys.stdin.readline
from collections import defaultdict

def nested_dict():
    return defaultdict(nested_dict)

N = int(input())
fileSystem = nested_dict()
fileSystem['root']
current_file = fileSystem['root']
path_stack = [current_file]

for _ in range(N):
    command = input().rstrip()
    if "mkdir" in command:
        _, filename = command.split()
        if filename not in current_file:
            current_file[filename]
    elif "cd" in command and "cd.." != command:
        _, filename = command.split()
        if filename in current_file:
            path_stack.append(current_file)
            current_file = current_file[filename]
    elif "cd.." == command:
        if len(path_stack) > 1:
            current_file = path_stack.pop()

# 재귀적으로 출력하기
def print_file(current_file, indent=0):
    for name in sorted(current_file.keys()):
        print(' ' * indent + name)
        print_file(current_file[name], indent + 1)

print_file(fileSystem, 0)