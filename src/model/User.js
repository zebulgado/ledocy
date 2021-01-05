const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
      type: String,
      required: true,

      state: {
          type: String,
          required: true,
          uppercase: true
      },
      city: {
        type: String,
        required: true
      },
      neighborhood: {
        type: String,
        required: true
      },
      number: {
          type: Number,
          required: true
      },
      complement: {
          type: String,
          required: false
      }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", UserSchema);