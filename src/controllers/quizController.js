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

    quizModel.buscarQuizCompleto(idQuiz)
        .then((resultado) => {
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

function corrigirRespostaQuiz(req, res) {
    const idQuiz = req.params.idQuiz;
    const respostasUsuario = req.body.respostas;
    const idUsuario = req.body.idUsuario;

    quizModel.buscarRespostasCorretas(idQuiz)
        .then(respostasCertas => {
            let acertos = 0;
            let total = 0;

            // Contar total de alternativas corretas
            for (let i = 0; i < respostasCertas.length; i++) {
                if (Number(respostasCertas[i].correto) == 1) {
                    total++;
                }
            }

            // Comparar as respostas do usuário com as alternativas corretas
            for (let i = 0; i < respostasUsuario.length; i++) {
                const respostaUsuario = respostasUsuario[i];
    
                for (let j = 0; j < respostasCertas.length; j++) {
                    const alternativaCorreta = respostasCertas[j];



                    if (Number(respostaUsuario.idAlternativa) === Number(alternativaCorreta.id) &&
                        Number(alternativaCorreta.correto) === 1
                    ) {
                        acertos++;
                        break;
                    }
                }
            }

            let porcentagem = 0;

            if (total > 0) {
                porcentagem = Number(((acertos / total) * 100).toFixed(2));
            }


            // Salvar no banco
            quizModel.salvarResultadoQuiz(idUsuario, idQuiz, acertos, total, porcentagem)
                .then(() => {
                    res.json({
                        acertos: acertos,
                        total: total,
                        porcentagem: porcentagem
                    });
                })
                .catch(erro => {
                    console.error("Erro ao salvar resultado:", erro);
                    res.status(500).json(erro);
                });
        })
        .catch(erro => {
            console.error("Erro ao corrigir quiz:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listarQuizzes,
    listarPerguntasAlternativas,
    corrigirRespostaQuiz
};