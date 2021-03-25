const express = require('express')
const route = express.Router()
const services = require('../service')

route.get('/', services.home)

route.post('/add', services.add)

module.exports = route