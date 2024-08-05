// DO YOUR MAGIC
const express = require('express')

const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require("./cars-middleware")

const Car = require("./cars-model")

const router = express.Router()

router.get('/', (req, res) => {
    Car.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', checkCarId, (req, res) => {
   res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res) => {
    try{
        const car = await Car.create(req.body)
        res.json(car)
    }catch(err){
        next(err)
    }
})


module.exports = router
