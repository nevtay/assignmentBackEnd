const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.MONGODB_URI

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
