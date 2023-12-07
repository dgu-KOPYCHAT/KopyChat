const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
    // Clear the refresh token cookie
    res.cookie('refreshToken', '', { expires: new Date(0) }); // Set the cookie to expire immediately
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;