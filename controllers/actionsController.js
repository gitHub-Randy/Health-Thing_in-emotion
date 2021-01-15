const express = require("express");
const Actions = require("../models/action.model");

module.exports = {
  getAll(req, res) {
    Actions.find().then((data) => {
      return res.send(data);
    });
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
