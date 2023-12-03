const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
//const dotenv = require('dotenv');

//dotenv.config();

// Database connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "simpleboard"
});

router.use(bodyParser.urlencoded({ extended: true }));

// Get all posts
router.get("/get", (req, res) => {
    const sqlQuery = "SELECT * FROM simpleboard;";
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Insert a post
router.post("/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        if (err) throw err;
        res.send('success!');
    });
});

module.exports = router;
