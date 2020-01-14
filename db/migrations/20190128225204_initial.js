
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('vocab', function(table) {
      table.increments('id').primary();
      table.string('term');
      table.string('meaning');
      table.string('category');
      table.string('etc');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('vocab')
  ]);
}
