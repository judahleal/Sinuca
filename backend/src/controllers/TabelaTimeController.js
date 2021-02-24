const connection = require('../database/connection');
const { param } = require('../routes');

module.exports = {
    async create(request, response) {
        const { tabelas_id, times_id } = request.body;

        const [{ count }] = await connection('tabelas_times')
            .where({ tabelas_id: tabelas_id })
            .count('id', { as: 'count' });

        if (count < 10) {
            const [id] = await connection('tabelas_times').insert({
                tabelas_id,
                times_id
            });

            return response.json({ id });
        }
        else {
            return response.json({ message: 'Limite de 10 times atingido.' });
        }
    },

    async show(request, response) {
        try {
            const times = await connection('times')
                .join('tabelas_times', 'tabelas_times.times_id', 'times.id')
                .select('*').where({
                    tabelas_id: request.query.tabelas_id
                });

            return response.json(times);
        } catch (err) {
            return response.json({ message: 'Erro ao retornar times.' });
        }
    },

    async update(request, response) {
        const { pontuacao } = request.body;
        const { tabela_time_id } = request.params;

        try {
            const times_id = await connection('tabelas_times')
                .where('id', tabela_time_id)
                .update({ pontuacao });

            return response.json({ times_id });
        }
        catch (err) {
            return response.json({ message: "Erro ao atualizar." });
        }
    }
}