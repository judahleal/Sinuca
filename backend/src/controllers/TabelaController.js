const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { nome, descricao, pontuacao, regra } = request.body;

        const [id] = await connection('tabelas').insert({
            nome,
            descricao,
            pontuacao,
            regra
        });

        return response.json({ id });
    },

    async show(request, response) {
        const times = await connection('tabelas').select('*');

        return response.json(times);
    }
}