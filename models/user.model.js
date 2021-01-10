const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    name: String,
    dateOfBirth: String,
  })
);

module.exports = User;
