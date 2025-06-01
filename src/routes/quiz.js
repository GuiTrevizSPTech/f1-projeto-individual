var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listarQuizzes", function (req, res) {
    quizController.listarQuizzes(req, res);
})


module.exports = router;