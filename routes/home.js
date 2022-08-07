const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'Express Application', message: 'Learning Express'}));

module.exports = router;
