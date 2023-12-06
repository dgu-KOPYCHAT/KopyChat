const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/get", async (req, res) => {
    try {
        const results = await db.board.findAll();
        res.send(results);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error fetching data');
    }
});

router.post("/insert", async (req, res) => {
    // const { num,nickname,bool,result,code } = req.body;
    try {
        await db.board.create(req.body); // Create a new record
        res.send('success!');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error inserting data');
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await db.board.destroy({ where: { id } });
        res.send('삭제 성공');
    } catch (err) {
        console.error('삭제 실패:', err);
        res.status(500).send('삭제 실패');
    }
});


module.exports = router;
