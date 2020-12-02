const mongoose = require('mongoose')

const schema = new mongoose.Schema(
	{
		id: Number,
		task: String
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('api_backend', schema)
