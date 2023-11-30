# ReactWeb
## 구성
본 repo는 KOPYCHAT 프로젝트 웹 서비스를 구동하기 위한 아래의 하위 소프트웨어로 구성됩니다.
- React Frontend 웹 `/reactweb/frontend`
- Google oauth Backend 서버 `/reactweb/backend`
- Judge Backend 서버 `/reactweb/judge`

## 실행
웹 서비스를 동작하기 위해 다음 명령을 개별 프로세스에서 순서대로 수행합니다.
### 1. Google oauth 실행
다음 명령어로 oauth 서버를 실행하여 구글 로그인 절차와 인증에 대기한다.
```shell
cd reactweb/backend
-작성필요-
```
### 2. judge 실행
서버 장치에 jdk가 설치되어 있지 않다면 패키지 명령어 혹은 아래 링크를 참고하여 설치한다.
https://www.oracle.com/java/technologies/downloads/#jdk21-windows

다음 명령어로 judge 서버를 실행하여 채점 서비스 api 호출에 대기한다.
```shell
cd reactweb/judge
node server.js
```
### 3. React 실행
다음 명령어로 react 웹을 최종적으로 구동한다.
```shell
cd reactweb/frontend
npm start
```
