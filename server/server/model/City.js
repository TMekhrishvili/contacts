const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const City = mongoose.model('City', CitySchema)

module.exports = City