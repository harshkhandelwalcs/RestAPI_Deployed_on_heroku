var express = require('express');
var router = express.Router();
var x = require('../controllers/test.controller')

/* GET home page. */
router.get('/', x.functionName);

module.exports = router;
