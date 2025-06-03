var dashboardModel = require("../models/dashboardModel");

function dadosKpi(req, res) {
    const idUsuario = req.body.idUsuario;

    dashboardModel.dadosKpi(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
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
            res.status(200).json(resultado);
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
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.error("erro ao buscar acertos por quiz: ", erro);
            res.status(500).json(erro);
        });
}

function dadosRanking(req, res) {

    dashboardModel.dadosRanking()
    .then(resposta => {
                res.status(200).json(resposta)
            })
            .catch(function (erro) {
                console.log("#ERRO", erro);
                res.status(401).send("Erro ao listar usuarios!")
            })
}

function usuarioMaisAcertos(req, res) {

    dashboardModel.usuarioMaisAcertos()
    .then(resposta => {
        res.status(200).json(resposta)
    })
    .catch(function (erro) {
        console.log("#ERRO", erro);
        res.status(401).send("Erro ao listar usuario!")
    })
}

module.exports = {
    dadosKpi,
    acertosPorQuiz,
    mediaPorQuiz,
    dadosRanking,
    usuarioMaisAcertos
};