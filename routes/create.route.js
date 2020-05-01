const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.model')

router.post('/', async (req, res) => {
  const newTodo = req.body
  console.log(newTodo)
  try {
    const saveNewTodo = new Todo(newTodo)
    await saveNewTodo.save()
    res
      .status(200)
      .send('Todo successfully saved!')
  } catch (error) {
    res
      .status(400)
      .send(error.errors.content.message)
  }
})

module.exports = router
