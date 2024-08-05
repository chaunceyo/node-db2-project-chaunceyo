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
})

router.get('/:id', checkCarId, (req, res) => {
   res.json(req.car)
})

router.post('/', (req, res) => {
    //finish middlewares and add before finishing router
})
module.exports = router
