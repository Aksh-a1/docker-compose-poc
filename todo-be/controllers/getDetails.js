const model = require('../models/model1')

const getDetails = (req, res) => {
	model.find({}, (err, data) => {
		if (!err) res.send(data)
	})
}

module.exports = getDetails
