const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const createRoute = require('./routes/create.route')
const readRoute = require('./routes/todos.route')
// const updateRoute = require('./routes/update.route')
// const deleteRoute = require('./routes/delete.route')

app.get('/', (req, res) => {
  res.send(
        `
        ROUTES:
        1. GET: /todos,
        2. POST: /create,
        3. PATCH: /edit,
        4. DELETE: /delete
        `
  )
})

app.use('/create', createRoute)
app.use('/todos', readRoute)
// app.use('/update', updateRoute)
// app.use('/delete', deleteRoute)

module.exports = app
