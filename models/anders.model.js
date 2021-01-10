const mongoose = require("mongoose");

const Anders = mongoose.model(
  "Anders",
  new mongoose.Schema({
    emotionName: String,
    userId: String,
  })
);

module.exports = Anders;