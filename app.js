const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(
        `
        ROUTES:
        1. GET: /add,
        2. POST: /todos,
        3. PATCH: /edit,
        4. DELETE: /delete
        `
  )
})

module.exports = app
