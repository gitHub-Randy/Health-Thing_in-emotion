const express = require("express");
const Actions = require("../models/action.model");

module.exports = {
  getAll(req, res) {
    Actions.find().then((data) => {
      return res.send(data);
    });
  },

  getSelection(req, res) {
    console.log(req.body)
    // Actions.find(
    //   {
    //     _id: {
    //       $in: [
    //         mongoose.Types.ObjectId("4ed3ede8844f0f351100000c"),
    //         mongoose.Types.ObjectId("4ed3f117a844e0471100000d"),
    //         mongoose.Types.ObjectId("4ed3f18132f50c491100000e"),
    //       ],
    //     },
    //   },
    //   function (err, docs) {
    //     console.log(docs);
    //   }
    // );
  },

  create(req, res) {
    let data = req.body;
    console.log("data: ", data);
    Actions.insertMany(data).then((newActions) => {
      console.log("New Actions: " + newActions);

      return res.send(newActions);
    });
  },
};
