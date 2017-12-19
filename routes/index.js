var express = require('express');
var router = express.Router();
var data = require('../controllers/questions.controller');

/* GET home page. */
router.get('/', data.getQuestions);
router.get('/answers',data.getAnswers);
// router.post('/',)

module.exports = router;
