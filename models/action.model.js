const mongoose = require("mongoose");

const Actions = mongoose.model(
    "Actions",
    new mongoose.Schema({
        actionName: String,
        done: Boolean,
    })
);

module.exports = Actions;
