# KopyChat

<center>
2023 2학기 소프트웨어공학개론_01 기말 프로젝트

<img src="https://github.com/dgu-KOPYCHAT/KopyChat/assets/121276581/d9ca323d-1a73-4d13-ac42-d4a134465ae8" width="150" />

온라인 코딩 검사 및 협력 플랫폼 **KopyChat**
</center>

## 팀원과 역할
- 2019112034 장재혁 팀장
`F&B 연동, frontend 최적화, backend 로직, 프레임워크 관리, 형상 관리, 회의록 관리`
- 2018112376 전우진
`mySQL 엔드포인트 배포, 시퀄라이즈 구현, API 설계, QA(리뷰)`
- 2020112039 윤성우
`frontend UI, 유스케이스&클래스 설계, React 라이브러리 구조 리팩토링`

## 구성
본 프로젝트는 KOPYCHAT 웹 서비스를 구동하기 위한 아래의 하위 소프트웨어로 구성됩니다.
- React Frontend 웹 클라이언트 `/reactweb/frontend`
- auth & DB Backend 서버 `/reactweb/backend`
- Judge Backend 서버 `/reactweb/judge`

## 실행
전체 서비스를 동작하기 위해 다음 명령을 개별 프로세스에서 순서대로 수행합니다.

필수 실행 환경: **node.js**

### 1. auth & DB 서버 실행
다음 명령어를 실행합니다. 본 서버는 Google Oauth 네트워크와 접속, 플랫폼을 통한 인증 및 mySQL 데이터베이스의 접근을 관할합니다.
```shell
cd reactweb/backend
npx nodemon index
```
### 2. Judge 실행
서버를 실행할 장치에 jdk가 설치되어 있지 않다면 패키지 명령어 혹은 아래 링크를 참고하여 jdk를 설치합니다. 서버의 컴파일러 버전이 jdk 버전으로 결정됩니다.
https://www.oracle.com/java/technologies/downloads/#jdk21-windows

다음 명령어를 실행합니다. 본 서버는 서버 장치에 설치된 컴파일러를 사용하여 POST 메소드로 요청된 코드를 저장, 컴파일, 수행하여 그 결과를 반환합니다.
```shell
cd reactweb/judge
node server.js
```
### 3. React 클라이언트 실행
다음 명령어로 react 웹 클라이언트를 최종적으로 구동합니다. `npm build`를 통해 성능을 향상시킬 수 있습니다.
```shell
cd reactweb/frontend
npm start
```



## 평가 참고용 프로젝트 회고

본 프로젝트의 기획 의도는 SW 개발 이론 적용, 그리고 팀원들의 경험에 중점을 두었습니다.

기술적 배경과 개발자로서의 방향성이 너무나 다른 3인이 팀으로 만나게 되었기에, 이번 기회에 mySQL, Node.js 등의 팀원들이 공평하게 경험해 보지 못했으면서 사용 경험이 유익한 프레임워크를 적용하고, 공학 이론을 적용하기 적합한 구성을 가진 프로젝트 계획을 수립하게 되었습니다.

https://www.notion.so/mdworld/KOPYCHAT-470d515608e84c10a55501f7fa48c468?pvs=4

한 학기동안 작성한 애자일 회의록입니다.

지식적 배경의 차이 및 프로젝트 일정 간의 팀 전체 입원 이슈로 인하여 완성 과정에는 차질이 많이 있었지만, 그 과정 속에서 많은 것을 배울 수 있었던 수업이고 프로젝트 였던 것 같습니다.