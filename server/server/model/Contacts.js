const mongoose = require('mongoose')

const ContactsSchema = new mongoose.Schema({
    fullNama: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    gender: {
        type: Number,
        required: true
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    favorite: {
        type: Boolean,
        required: true,
        default: false
    },
})

const Contacts = mongoose.model("Contacts", ContactsSchema)

module.exports = Contacts