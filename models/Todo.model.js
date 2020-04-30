const mongoose = require('mongoose')
const todoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 1
    },
    completed: {
      type: Boolean
    },
    active: {
      type: Boolean
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const User = mongoose.model('Todo', todoSchema)

module.exports = User
