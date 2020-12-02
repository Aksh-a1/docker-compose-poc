const model = require('../models/model1')

const addDetails = (req, res) => {
	model.create(
		{ id: req.body.id, task: req.body.task },
		(err, data) => {
			if (!err) res.send(data)
		}
	)
}

module.exports = addDetails
