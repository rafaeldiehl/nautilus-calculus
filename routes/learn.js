const express = require('express');
const router = express.Router();

router.get('/learn', (req, res) => {
    res.json({
        content: 'Faça um exercício',
        author: 'Fulano'
    });
});

module.exports = router;