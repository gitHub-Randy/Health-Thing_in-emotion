const express = require('express');
const ChosenEmotion = require('../models/emotion.model');

module.exports = {
    getAll(req, res){
        ChosenEmotion.find().then(data => {
            return res.send(data);
        })
    },

    create(req, res) {
        let data = req.body;
        console.log("data: ", data)
        let newEmotion = new ChosenEmotion({

            chosenEmotions: data.emotionData,
            userId: data.userId
        }).save().then(newChosenEmotions =>{
            console.log("New Emotion: " + newChosenEmotions);

            return res.send(newChosenEmotions)

        });
         
    },
  
}
