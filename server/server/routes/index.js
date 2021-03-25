const express = require('express')
const route = express.Router()
const services = require('../service')
const addContact = require('../service/addContact')
const addGender = require('../service/addGender')
const addCity = require('../service/addCity')

route.get('/', services.home)

route.post('/add', addContact)
route.post('/add/gender', addGender)
route.post('/add/city', addCity)

module.exports = route