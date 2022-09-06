var express = require('express');
var router = express.Router();
const conroller = require('../controllers/travel');

/* GET home page. */
router.get('/', conroller.travel);

module.exports = router;
