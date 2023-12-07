const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const google = require('./google');
const logout = require('./logout');

router.use("/", google);
router.use("/", logout);


module.exports = router;