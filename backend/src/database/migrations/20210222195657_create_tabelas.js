exports.up = function (knex) {
    return knex.schema.createTable('tabelas', function (table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.integer('pontuacao').notNullable();
        table.string('regra').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tabelas');
};