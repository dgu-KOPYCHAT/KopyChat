# JudgeLogic
여기는 채점 로직 서버를 담당하는 JudgeLogic repository의 node.js판 개발 브랜치입니다.

node.js의 express.js 등을 통해 서버를 구동하고, curl 및 test경로의 웹 페이지를 구동시켜 동작을 테스트할 수 있습니다.

```bash
cd judge
```
```bash
node server.js
```
여기까지 서버를 구동시키고, 아래의 명령을 별도 터미널에서 수행하여 테스트할 수 있습니다.
```bash
curl -X POST -H "Content-Type: text/plain" --data "public class Main { public static void main(String[] args) { System.out.println(123); } }" http://localhost:3000/compile
```