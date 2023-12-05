const express = require('express');
const morgan = require('morgan');
const PORT = 8000;
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const routes = require('./routes');
const cookieParser  = require('cookie-parser');
const cors = require('cors');

const db2 = mysql.createPool({
    host: "database-1.cfcltcgk8ise.ap-northeast-2.rds.amazonaws.com",
    user: "kopychat",
    password: "zhvlcot1234",
    database: "kopychat"
});

app.use(cors({
    origin:true,
    credentials:true
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(routes);

app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM board;";
    db2.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO board (title, content) VALUES (?,?)";
    db2.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});

app.delete("/api/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const sqlQuery = "DELETE FROM board WHERE idx = ?";
    db2.query(sqlQuery, [id], (err, result) => {
        if (err) {
            console.error('삭제 실패:', err);
            res.status(500).send('삭제 실패');
        } else {
            console.log('삭제 성공:', result);
            res.send('삭제 성공');
        }
    });
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`))

