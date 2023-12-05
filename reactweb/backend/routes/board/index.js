const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const dbConfig = require('../../config/config.json').development_kopy; // Adjust path as needed
const db2 = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
const morgan = require('morgan');
const PORT = 8000;
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const cookieParser  = require('cookie-parser');
const cors = require('cors');

router.get("/get", async (req, res) => {
    try {
        const results = await db2.query("SELECT * FROM board;", { type: Sequelize.QueryTypes.SELECT });
        res.send(results);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error fetching data');
    }
});

router.post("/insert", async (req, res) => {
    const { title, content } = req.body;
    try {
        await db2.query("INSERT INTO board (title, content) VALUES (?, ?)", { 
            replacements: [title, content], 
            type: Sequelize.QueryTypes.INSERT 
        });
        res.send('success!');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error inserting data');
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const sqlQuery = "DELETE FROM board WHERE id = ?";

    try {
        await db2.query(sqlQuery, {
            replacements: [id], // Pass the ID as a replacement
            type: Sequelize.QueryTypes.DELETE
        });
        console.log('삭제 성공');
        res.send('삭제 성공');
    } catch (err) {
        console.error('삭제 실패:', err);
        res.status(500).send('삭제 실패');
    }
});


module.exports = router;
