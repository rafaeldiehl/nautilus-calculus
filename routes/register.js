const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.json({
        content: 'Crie sua conta',
        author: 'Fulano'
    });
});

module.exports = router;