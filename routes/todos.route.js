const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.model')

router.get('/', async (req, res) => {
  const allTodos = await Todo.find()
  console.log(allTodos)
  try {
    res
      .status(200)
      .json(allTodos)
  } catch (error) {
    res
      .status(400)
      .send(error)
  }
})

module.exports = router
