var database = require("../database/config")

function dadosKpi(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosKpi(): ", idUsuario)
    var instrucaoSql = `
        select sum(t.acertos) as total_acertos,
                truncate(sum(t.acertos) * 100 / sum(t.total),2) as media_porcentagem_acertos
        from usuario u
        join resultado_quiz t on u.id = t.id_usuario
        where u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function acertosPorQuiz(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function acertosPorQuiz(): ", idUsuario)
    var instrucaoSql = `
        SELECT 
            q.titulo as titulo_quiz,
            SUM(rq.acertos) as total_acertos
        FROM resultado_quiz rq
        JOIN quiz q ON rq.id_quiz = q.id
        WHERE rq.id_usuario = ${idUsuario}
        GROUP BY rq.id_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaPorQuiz(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mediaPorQuiz(): ", idUsuario)
    var instrucaoSql = `
        SELECT
        q.titulo as titulo_quiz,
        truncate(SUM(rq.acertos) * 100 / sum(rq.total), 2) as media_porcentagem
        FROM resultado_quiz rq
        JOIN quiz q ON rq.id_quiz = q.id
        WHERE rq.id_usuario = ${idUsuario}
        GROUP BY rq.id_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function dadosRanking() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosRanking()")
    var instrucaoSql = `
        select
            u.nome,
            sum(rq.acertos) total_acertos,
            truncate(sum(rq.acertos) * 100 / sum(rq.total), 2) media_acertos from resultado_quiz rq
        join usuario u on rq.id_usuario = u.id
        group by u.id
        order by total_acertos desc
        limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuarioMaisAcertos() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function usuarioMaisAcertos()")
    var instrucaoSql = `
        select
            u.nome,
            sum(rq.acertos) total_acertos
        from resultado_quiz rq
        join usuario u on rq.id_usuario = u.id
        group by u.id
        order by total_acertos desc
        limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuarioMaiorMedia() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function usuarioMaiorMedia()")
    var instrucaoSql = `
        select
            u.nome,
            truncate(sum(rq.acertos) * 100 / sum(rq.total), 2) media_acertos 
		from resultado_quiz rq
        join usuario u on rq.id_usuario = u.id
        group by u.id
        order by media_acertos desc
        limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function marcaFavoritaUsuarios() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcaFavoritaUsuarios()")
    var instrucaoSql = `
        SELECT 
            m.nome nome_marca,
            COUNT(*) total_usuarios
        FROM usuario u
        JOIN marca m ON u.fk_marca_favorita = m.id
        GROUP BY m.id
        ORDER BY total_usuarios DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function marcaFavoritaDoUsuario(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcaFavoritaUsuarios()", idUsuario)
    var instrucaoSql = `
        select m.nome as marca_favorita from usuario u
        join marca m on u.fk_marca_favorita = m.id
        where u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    dadosKpi,
    acertosPorQuiz,
    mediaPorQuiz,
    dadosRanking,
    usuarioMaisAcertos,
    usuarioMaiorMedia,
    marcaFavoritaUsuarios,
    marcaFavoritaDoUsuario
}