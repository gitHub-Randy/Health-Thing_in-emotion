const express = require("express");
const Goals = require("../models/goal.model");
const actionsController = require("./actionsController");
const Actions = require("../models/action.model");

module.exports = {
  getAll(req, res) {
 
    Goals.find().then((data) => {
      return res.send(data);
    });

  },

  create(req, res) {
    let data = req.body;
    console.log("data: ", data);
    Goals.insertMany(data).then(newGoals => {
      console.log("New Goals: " + newGoals);

      return res.send(newGoals);
    })
  
  },

  update(req, res) {
    req.body.forEach(goal => {
      Goals.findByIdAndUpdate(goal._id, goal).then(data => {
          console.log(data)
        })
    });
    return res.send("updated")

    
  }
};
