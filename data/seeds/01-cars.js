// STRETCH
exports.seed = function(knex){

    return knex('cars').truncate()
    .then(function (){
        return knex('cars').insert([
            {vin: '11111111111111111', make: 'Kia', model: 'Optima EX', mileage: 126934, transmission: 'automatic'},
            {vin: '2HNYD2H83CH518899', make: 'Honda', model: 'Civic', mileage: 80432, transmission: 'automatic'},
            {vin: '3VWRZ71K09M149196', make: 'Nissan', model: 'Altima', mileage: 246987, transmission: 'automatic'},
            {vin: '4A32B3FF8CE011672', make: 'Toyota', model: 'Camry', mileage: 100423, transmission: 'automatic'},
        ])
    })
}