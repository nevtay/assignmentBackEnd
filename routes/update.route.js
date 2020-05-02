const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.model')

router.post('/', async (req, res) => {
  const { id, label } = { ...req.body }
  Todo.findOneAndUpdate({ id: id }, { label: label }, (err, data) => {
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
