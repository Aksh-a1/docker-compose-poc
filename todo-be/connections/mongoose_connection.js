const mongoose = require('mongoose')

const db = mongoose.connection

const dbUrl = `mongodb://${process.env.DATABASE_LOCATION || 'localhost'}:${process.env.DATABASE_PORT || '27017'}/api_backend`

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.error('connection error please check env variables')
  process.exit(1)
})

module.exports = db.once('open', () => console.log('db connected'))
