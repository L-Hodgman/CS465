var express = require('express');
var router = express.Router();
const conroller = require('../controllers/news');

/* GET home page. */
router.get('/', conroller.news);

module.exports = router;