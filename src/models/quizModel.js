var database = require("../database/config")

function listarQuizzes() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuizzes(): ")
    var instrucaoSql = `
        SELECT id, titulo from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuizCompleto(idQuiz) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarQuizCompleto(): ", idQuiz)
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

function buscarRespostasCorretas(idQuiz) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarRespostasCorretas(): ", idQuiz)
    var instrucaoSql = `
        SELECT a.id, a.correto
        FROM quiz q
        JOIN pergunta p ON p.id_quiz = q.id
        JOIN alternativa a ON a.fk_pergunta = p.id
        WHERE q.id = ${idQuiz};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarResultadoQuiz(idUsuario, idQuiz, acertos, total, porcentagem) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarResultadoQuiz(): ", idUsuario, idQuiz, acertos, total, porcentagem)
    var instrucaoSql = `
        INSERT INTO resultado_quiz (id_usuario, id_quiz, acertos, total, porcentagem)
        VALUES (${idUsuario}, ${idQuiz}, ${acertos}, ${total}, ${porcentagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    listarQuizzes,
    buscarQuizCompleto,
    buscarRespostasCorretas,
    salvarResultadoQuiz
}