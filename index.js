require('./utils/db.js')
const app = require('./app')
const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
  console.log(`App started on localhost:${PORT}`)
})
