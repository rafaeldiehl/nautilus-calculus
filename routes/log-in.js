const express = require('express');
const router = express.Router();

router.get('/log-in', (req, res) => {
    res.json({
        content: 'Entre!',
        author: 'Fulano'
    });
});

module.exports = router;