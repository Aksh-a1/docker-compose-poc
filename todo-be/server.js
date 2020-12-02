const express = require('express')
const cors = require('cors')
const dbConnect = require('./connections/mongoose_connection')
const route = require('./routes/route')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', route)

app.get('/', (req, res) => {
	res.send('API up and working..')
})

const port = process.env.PORT || 4000

dbConnect.then(()=>{
	app.listen(port, () => {
		console.log('Listening to the port: ' + port)
	})
})
