var quizModel = require("../models/quizModel");

function listarQuizzes(req, res) {
    quizModel.listarQuizzes()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    listarQuizzes
};