var dashboardModel = require("../models/dashboardModel");

function dadosKpi(req, res) {
    const idUsuario = req.body.idUsuario;

    dashboardModel.dadosKpi(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]);
            } else {
                res.status(404).json({ erro: "Nenhum dado encontrado para esse usuário." });
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar KPIs:", erro);
            res.status(500).json(erro);
        });
}

function acertosPorQuiz(req, res) {
    const idUsuario = req.body.idUsuario;

    dashboardModel.acertosPorQuiz(idUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("erro ao buscar acertos por quiz: ", erro);
            res.status(500).json(erro);
        });
}

function mediaPorQuiz(req, res) {
    const idUsuario = req.body.idUsuario;

    dashboardModel.mediaPorQuiz(idUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("erro ao buscar acertos por quiz: ", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    dadosKpi,
    acertosPorQuiz,
    mediaPorQuiz
};