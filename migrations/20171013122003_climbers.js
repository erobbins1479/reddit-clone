
exports.up = function(knex, Promise) {
  return Promise.all([
		knex.schema.createTable('climbers', function(table){
			table.increments()
			table.string('name')
			table.string('link')
			table.integer('votes')
		})
	])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('climbers')
	])
};
