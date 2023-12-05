const users = require('./user');
const express = require('express');
const router = express.Router();

const board = require('./board'); // Import board routes

router.use("/board", board); // Use board routes
router.use("/user", users);

module.exports = router;