const mongoose = require('mongoose')
const todoSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      minlength: 1
    },
    done: {
      type: Boolean
    },
    id: {
      type: String
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
