exports.up = function (knex) {
    return knex.schema.createTable('tabelas_times', function (table) {
        table.increments('id').primary();
        table.integer('times_id');
        table.integer('tabelas_id');
        table.integer('pontuacao').defaultTo(0);
        table.foreign('id').references('tabelas_id').inTable('tabelas');
        table.foreign('id').references('times_id').inTable('times');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tabelas_times');
};