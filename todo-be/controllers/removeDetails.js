const model = require('../models/model1')

const removeDetails = (req, res) => {
	model.findOneAndRemove({ id: req.body.id }, (err, data) => {
		if (!err) res.send(data)
	})
}

module.exports = removeDetails
