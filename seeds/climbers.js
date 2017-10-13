
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('climbers').del()
    .then(function () {
      // Inserts seed entries
      return knex('climbers').insert([{
					id: 1,
					name: 'Alex Puccio',
					link: 'https://en.wikipedia.org/wiki/Alex_Puccio',
					votes: 0
				},
        {
					id: 2,
					name: 'Tommy Caldwell',
					link: 'https://en.wikipedia.org/wiki/Tommy_Caldwell',
					votes: 0
				 	},
        {
					id: 3,
					name: 'Alex Honnold',
					link: 'https://en.wikipedia.org/wiki/Alex_Honnold',
					votes: 0
				}
      ]);
    });
};
