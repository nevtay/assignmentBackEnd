const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.model')

router.delete('/:todoId', async (req, res) => {
  await Todo.findOneAndRemove({ id: req.params.todoId },
    (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res
          .status(200)
          .send('Todo has been deleted')
      }
    })
})

module.exports = router
