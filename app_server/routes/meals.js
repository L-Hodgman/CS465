var express = require('express');
var router = express.Router();
const conroller = require('../controllers/meals');

/* GET home page. */
router.get('/', conroller.meals);

module.exports = router;