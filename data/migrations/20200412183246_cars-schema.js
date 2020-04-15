
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.integer('VIN').unique().notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission', 128);
        tbl.string('title_status',128);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
