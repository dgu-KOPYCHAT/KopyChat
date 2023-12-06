const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(bodyParser.text());
app.use(cors());

app.post('/compile', async (req, res) => {
  // 받은 Java 코드를 파일로 저장
  const curTime = new Date();
  const javaCode = req.body;
  const fileName = 'Main.java';
  const fileRoot = 'target';
  let filePath = path.join(fileRoot, fileName);

  console.log(`[${curTime.toISOString()}] POST 리퀘스트 수신.`);
  fs.writeFile(filePath, javaCode, (err) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');

    if (err) {
      return res.status(500).send('Error writing Java code to file');
    }

    // Java 코드 컴파일 및 실행
    exec(`javac ${filePath} && java -cp ${fileRoot} Main`, (compileError, stdout, stderr) => {
      if (compileError) {
        return res.status(500).send(`${stderr}`);
      }

      // 실행 결과를 클라이언트에게 반환
      res.send(stdout);
    });
  });
});

app.listen(port, () => {
  console.log(`채점 서버가 'http://localhost:${port}' 에서 작동을 시작했습니다.`);
});
