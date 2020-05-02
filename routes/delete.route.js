const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.model')

router.delete('/:todoId', async (req, res) => {
  const deletedTodo = await Todo.findOneAndRemove({ id: req.params.todoId },
    (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res
          .status(200)
          .send(data)
      }
    })
})

module.exports = router
