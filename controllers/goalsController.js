const express = require('express');
const Goals = require('../models/goal.model');

module.exports = {
    getAll(req, res){
        Goals.find().then(data => {
            return res.send(data);
        })
    },

    create(req, res) {
        let data = req.body;
        console.log("data: ", data)
        let newGoal = new Goals({

            chosenGoals: data.goalData,
            userId: data.userId
        }).save().then(newChosenGoals =>{
            console.log("New Goals: " + newChosenGoals);

            return res.send(newChosenGoals)

        });
         
    },
  
}
