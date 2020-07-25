exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '123456789', make: 'ford', model: 'fiesta', milage: '987564', transmission: 'automatic', title: 'salvage' },
        {vin: '459878121', make: 'ford', model: 'focus', milage: '15987', transmission: 'automatic', title: 'salvage' },
        {vin: '789516165', make: 'ford', model: 'ranger', milage: '123', transmission: 'automatic', title: 'clean' },
      ]);
    })
    .then(function (carsRecord) {
      // Inserts seed entries
      return knex('sales').insert([
        {cars_id: carsRecord.id, price:'1100'},
        {cars_id: carsRecord.id, price:'1200'},
        {cars_id: carsRecord.id, price:'1500'},
      ]);
    });
};
