# ReactWeb
## 구성
본 repo는 KOPYCHAT 프로젝트 웹 서비스를 구동하기 위한 아래의 하위 소프트웨어로 구성됩니다.
- React Frontend 웹 `/reactweb/frontend`
- Google oauth Backend 서버 `/reactweb/backend`
- Judgelogic Backend 서버 `/reactweb/judgelogic`

## 실행
웹 서비스를 동작하기 위해 다음 명령을 개별 프로세스에서 순서대로 수행합니다.
### 1. Google oauth 실행
다음 명령어로 oauth 서버를 실행하여 구글 로그인 절차와 인증에 대기한다.
```shell
cd reactweb/backend
-작성필요-
```
### 2. judgelogic 실행
다음 명령어로 judgelogic 서버를 실행하여 채점 서비스 api 호출에 대기한다.
```shell
cd reactweb/judgelogic
node server.js
```
### 3. React 실행
다음 명령어로 react 웹을 최종적으로 구동한다.
```shell
cd reactweb/frontend
npm start
```
