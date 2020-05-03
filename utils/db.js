const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.MONGODB_URI || 'mongodb://heroku_vm5wj5fr:s7c62jutk0esh3qot9av8ascrc@ds161144.mlab.com:61144/heroku_vm5wj5fr'

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error!'))
db.once('open', () => {
  console.log(`Connection to ${dbUrl} is up and running!`)
})
