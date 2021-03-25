const mongoose = require('mongoose')

const GenderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const Gender = mongoose.model('Gender', GenderSchema)

module.exports = Gender