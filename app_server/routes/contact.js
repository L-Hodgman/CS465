var express = require('express');
var router = express.Router();
const conroller = require('../controllers/contact');

/* GET home page. */
router.get('/', conroller.contact);

module.exports = router;