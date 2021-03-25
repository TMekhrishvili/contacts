const express = require('express')
const route = express.Router()

const services = require('../service')

const addContact = require('../service/addContact')
const addGender = require('../service/addGender')
const addCity = require('../service/addCity')

const getContacts = require('../service/getContacts')
const getGender = require('../service/getGender')
const getCities = require('../service/getCities')


route.get('/', services.home)

route.post('/add', addContact)
route.post('/add/gender', addGender)
route.post('/add/city', addCity)

route.get('/get/contacts', getContacts)
route.get('/get/gender', getGender)
route.get('/get/cities', getCities)

module.exports = route