const { buscarQuizCompleto } = require("../controllers/quizController");
var database = require("../database/config")

function listarQuizzes() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuizzes(): ")
    var instrucaoSql = `
        SELECT id, titulo from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuizCompleto(idQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarQuizCompleto(): ", idQuiz)
    var instrucaoSql = `
        SELECT 
            q.id AS id_quiz,
            q.titulo AS titulo_quiz,
            p.id AS id_pergunta,
            p.enunciado AS enunciado,
            a.id AS id_alternativa,
            a.texto AS texto_alternativa
        FROM quiz q
        JOIN pergunta p ON q.id = p.id_quiz
        JOIN alternativa a ON p.id = a.fk_pergunta
        WHERE q.id = ${idQuiz}
        ORDER BY p.id, a.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarQuizzes,
    buscarQuizCompleto
}