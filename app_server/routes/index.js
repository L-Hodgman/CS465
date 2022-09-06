var express = require('express');
var router = express.Router();
const conroller = require('../controllers/main');

/* GET home page. */
router.get('/', conroller.index);

module.exports = router;
