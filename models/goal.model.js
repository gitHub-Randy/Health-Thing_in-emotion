const mongoose = require("mongoose");

const Goals = mongoose.model(
  "Goals",
  new mongoose.Schema({
    chosenGoals: [
      {
        goalName: String,
        progress: Number,
        finished: Boolean,
        actions: [
          {
            actionName: String,
          },
        ],
      },
    ],
    userId: String,
  })
);

module.exports = Goals;
