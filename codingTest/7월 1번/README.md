# 문제

구름이는 간단한 파일 시스템을 만들고 있다. 이 파일 시스템은 가지 명령어로 작동되고 있다.

- `mkdir {filename}`는 현재 위치한 폴더에서 `{filename}` 폴더를 생성한다. 만약에 같은 이름의 폴더가 이미 있다면 생성하지 않는다.
- `cd {filename}` 는 현재 위치 폴더에서 `{filename}` 폴더로 이동한다. 만약에 그러한 이름의 폴더가 없다면 이동하지 않는다.
- `cd..` 은 현재 위치 폴더에서 상위 폴더로 이동한다. 만약에 현재 위치가 root 폴더이거나 이동할 수 없다면, 이동하지 않는다.

현재 위치 폴더는 root 폴더이고, 이외 다른 폴더가 없는 상황에서 구름이가 N개의 명령어를 파일 시스템에 입력했다. 모든 명령을 수행했을 때, 최종 파일 구조를 출력해보자.

# 입력

첫째 줄에 명령어의 개수 N이 주어진다.
그 다음 N줄에 걸쳐서 명령어가 주어진다.

- 1 <= N <= 1000
- 명령어는 `mkdir`, `cd`, `cd..` 중 하나가 주어진다.
- `{filename}`의 길이가 1이상, 20이하의 문자열이다.

# 출력

최종 파일 구조는 아래의 규칙으로 출력한다.

root 폴더부터 띄어쓰기 없이 모든 폴더를 사전 순서대로 출력한다.
하위 폴더는 상위 폴더보다 띄어쓰기를 1칸 사용한다.
한 폴더의 모든 하위 폴더를 출력한 후, 다음 폴더로 넘어가서 출력한다.

## 예시 1

입력

```
10
mkdir goorm
mkdir goormee
cd goorm
cd dummy
cd..
cd goorm
mkdir goormee
cd goormee
mkdir happy
cd..
```

출력

```
root
 goorm
  goormee
   happy
 goormee
```

## 예시 2

입력

```
13
cd..
mkdir j
mkdir woclbl
cd woclbl
cd j
mkdir ftpahhnsr
mkdir jz
cd jz
cd..
mkdir asjtpxss
cd..
cd..
cd asjtpxss
```

출력

```
root
 j
 woclbl
  asjtpxss
  ftpahhnsr
  jz
```
