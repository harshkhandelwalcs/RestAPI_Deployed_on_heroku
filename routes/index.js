var express = require('express');
var router = express.Router();
var data = require('../controllers/questions.controller');
var questions = require('../controllers/theoryquestions.controller');
/* GET home page. */
router.get('/', data.getQuestions);
router.get('/answers',data.getAnswers);
router.get('/theoryquestions',questions.getTheoryQuestions)

module.exports = router;
