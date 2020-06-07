const express = require('express');
const router = express.Router();

router.use('/', require('./register'));
router.use('/', require('./log-in'));
router.use('/', require('./learn'));

module.exports = router;