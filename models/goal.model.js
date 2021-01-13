const mongoose = require("mongoose");

const Goals = mongoose.model(
  "Goals",
  new mongoose.Schema({
    chosenGoals:[
        {
            goalName: String,
            progress: Number,
            finished: Boolean,
        }
    ],
    userId: String,
  })
);

module.exports = Goals;