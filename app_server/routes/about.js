var express = require('express');
var router = express.Router();
const conroller = require('../controllers/about');

/* GET home page. */
router.get('/', conroller.about);

module.exports = router;