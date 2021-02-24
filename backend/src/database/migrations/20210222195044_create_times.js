exports.up = function (knex) {
    return knex.schema.createTable('times', function (table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('jogador1').notNullable();
        table.string('jogador2').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('times');
};