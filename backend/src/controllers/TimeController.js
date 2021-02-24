const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { nome, jogador1, jogador2 } = request.body;

        const [id] = await connection('times').insert({
            nome,
            jogador1,
            jogador2
        });

        return response.json({ id });
    },

    async show(request, response) {
        const times = await connection('times').select('*');

        return response.json(times);
    }
}