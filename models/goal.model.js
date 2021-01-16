const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Goals = mongoose.model(
  "Goals",
  new mongoose.Schema({
    goalName: String,
    progress: Number,
    finished: Boolean,
    actions: [
      {
        _id: String,
        actionName: String,
        done: false,
      },
    ],
    userId: String,
  })
);

module.exports = Goals;
