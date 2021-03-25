const express = require('express')
const route = express.Router()
const services = require('../service')

route.get('/', services.home)

module.exports = route