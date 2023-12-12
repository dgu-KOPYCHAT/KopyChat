const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get("/get", async (req, res) => {
    try {
        const results = await db.quiz.findAll();
        res.send(results);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error fetching data');
    }
});

router.get("/get/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await db.quiz.findOne({where: {id:id}});
        res.send(result);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error fetching data');
    }
});

router.post("/insert", async (req, res) => {
    try {
        await db.quiz.create(req.body);
        res.send('success!');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error inserting data');
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await db.quiz.destroy({ where: { id } });
        res.send('삭제 성공');
    } catch (err) {
        console.error('삭제 실패:', err);
        res.status(500).send('삭제 실패');
    }
});


module.exports = router;
