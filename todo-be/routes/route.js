const route = require('express').Router()
const getDetails = require('../controllers/getDetails')
const addDetails = require('../controllers/addDetails')
const removeDetails = require('../controllers/removeDetails')

route
	.get('/', getDetails)
	.post('/', addDetails)
	.delete('/', removeDetails)

module.exports = route
