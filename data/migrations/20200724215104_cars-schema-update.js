
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id').primary();
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.decimal('milage').notNullable();
        tbl.text('transmission');
        tbl.text('title');
    })
    .createTable('sales', tbl => {
        tbl.integer('cars_id').primary();
        tbl.foreign('cars_id').references('cars.id').onDelete('cascade');
        tbl.decimal('price').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('sales')
    .dropTableIfExists('cars')
};
