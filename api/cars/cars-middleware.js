const Car = require("../cars/cars-model")
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const car = await  Car.getById(req.params.id)

  if(!car){
    next({status: 404, message: `car with id ${req.params.id} is not found` })
  }else{
    req.car = car
    return next()
  }
}

const checkCarPayload = (req, res, next) => {
  if(!req.body.vin){
     next({status: 400, message:'vin is missing'})
    }
   if (!req.body.make){
       next({status: 400, message:'make is missing'})
      }
   if(!req.body.model){
         next({status: 400, message:'model is missing'})
        }
   if(!req.body.mileage){
           next({status: 400, message:'mileage is missing'})
        }

    next()
}

const checkVinNumberValid = (req, res, next) => {
  if(vin.validate(req.body.vin)){
    next()
  }else{
    next({status: 400, message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const existing = await Car.getByVin(req.body.vin)

    if(!existing){
      next()
    }else{
       next({status: 400, message: `vin ${req.body.vin} already exists`})
    }
  }catch(err){
       next(err)
  }
}

module.exports = {
  checkCarId, 
  checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid,
}