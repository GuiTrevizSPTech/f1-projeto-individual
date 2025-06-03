var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/dadosKpi", function (req, res) {
    dashboardController.dadosKpi(req, res);
})

router.post("/acertosPorQuiz", function (req, res) {
    dashboardController.acertosPorQuiz(req, res);
})

router.post("/mediaPorQuiz", function (req, res) {
    dashboardController.mediaPorQuiz(req, res);
})

router.get("/dadosRanking", function (req, res) {
    dashboardController.dadosRanking(req, res);
})

router.get("/usuarioMaisAcertos", function (req, res) {
    dashboardController.usuarioMaisAcertos(req, res);
})

router.get("/usuarioMaiorMedia", function (req, res) {
    dashboardController.usuarioMaiorMedia(req, res);
})

router.get("/marcaFavoritaUsuarios", function (req, res) {
    dashboardController.marcaFavoritaUsuarios(req, res);
})

module.exports = router;