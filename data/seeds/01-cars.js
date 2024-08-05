// STRETCH
exports.seed = function(knex){

    return knex('cars').truncate()
    .then(function (){
        return knex('cars').insert([
            {vin: 12345678, make: 'Kia', model: 'Optima EX', mileage: 126934, transmission: 'automatic'},
            {vin: 83456211, make: 'Honda', model: 'Civic', mileage: 80432, transmission: 'automatic'},
            {vin: 55524714, make: 'Nissan', model: 'Altima', mileage: 246987, transmission: 'automatic'},
            {vin: 18004563, make: 'Toyota', model: 'Camry', mileage: 100423, transmission: 'automatic'},
        ])
    })
}