const mongoose = require('mongoose')
const dbUrl = 'mongodb://mongo:27017/docker-app' || process.env.MONGODB_URI

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
