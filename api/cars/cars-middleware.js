const Car = require("../cars/cars-model")

const checkCarId = async (req, res, next) => {
  const car = await  Car.getById(req.params.id)

  if(!car){
    next({status: 404, message: `car with id ${req.params.id} is not found` })
  }else{
    req.car = car
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId, 
  checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid,
}