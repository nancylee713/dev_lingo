exports.seed = function(knex) {
  return knex('vocab').del()
    .then(() => {
      return Promise.all([
        knex('vocab').insert({
          term: 'test', meaning: 'meaning', category: 'test', etc: ''
        }, 'id')
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
