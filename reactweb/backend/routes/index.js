const express = require('express');
const router = express.Router();

const users = require('./user');
const boards = require('./table/board');
const quizs = require('./table/quiz');
const results = require('./table/result');

router.use("/user", users);
router.use("/board", boards);
router.use("/quiz", quizs);
router.use("/result", results);

module.exports = router;