var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listarQuizzes", function (req, res) {
    quizController.listarQuizzes(req, res);
})

router.get("/perguntas/:idQuiz", function (req, res) {
    quizController.listarPerguntasAlternativas(req, res);
})

router.post("/responder/:idQuiz", function (req, res) {
    quizController.corrigirRespostaQuiz(req, res)
})

router.post("/dadosKpi/", function (req, res) {
    quizController.dadosKpi(req, res);
})

module.exports = router;