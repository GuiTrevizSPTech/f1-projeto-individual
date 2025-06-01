var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listarQuizzes", function (req, res) {
    quizController.listarQuizzes(req, res);
})

router.get("/perguntas/:idQuiz", function (req, res) {
    quizController.listarPerguntasAlternativas(req, res);
})

module.exports = router;