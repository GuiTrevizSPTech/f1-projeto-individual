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

module.exports = {
    dadosKpi
};