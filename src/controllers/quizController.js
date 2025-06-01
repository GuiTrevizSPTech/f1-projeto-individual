var quizModel = require("../models/quizModel");

function listarQuizzes(req, res) {
    quizModel.listarQuizzes()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            res.status(500).json(erro);
        });
}

function listarPerguntasAlternativas(req, res) {
    const idQuiz = req.params.idQuiz;

    quizModel.buscarQuizCompleto(idQuiz).then((resultado) => {
        if (resultado.length === 0) {
            res.status(404).json({ erro: "Quiz não encontrado" });
            return;
        }

        const titulo = resultado[0].titulo_quiz;
        const perguntas = [];

        let perguntaAtualId = null;
        let perguntaAtual = null;

        for (let i = 0; i < resultado.length; i++) {
            const linha = resultado[i];

            if (linha.id_pergunta !== perguntaAtualId) {
                if (perguntaAtual !== null) {
                    perguntas.push(perguntaAtual);
                }

                perguntaAtualId = linha.id_pergunta;
                perguntaAtual = {
                    id: linha.id_pergunta,
                    enunciado: linha.enunciado,
                    alternativas: []
                };
            }

            perguntaAtual.alternativas.push({
                id: linha.id_alternativa,
                texto: linha.texto_alternativa
            });
        }

        // adicionar a última pergunta
        if (perguntaAtual !== null) {
            perguntas.push(perguntaAtual);
        }

        res.json({
            titulo: titulo,
            perguntas: perguntas
        });
    }).catch((erro) => {
        console.error("Erro ao buscar quiz completo:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listarQuizzes,
    listarPerguntasAlternativas
};