const express = require("express");
const Anders = require("../models/anders.model");

module.exports = {
  getAll(req, res) {
    Anders.find()
      .then((data) => {
        return res.send(data);
      })
      .catch((e) => {
        console.log("GET");

        console.log(e);
      });
  },

  create(req, res) {
    console.log(req.body);
    let data = req.body;
    data.forEach((newEmotion) => {
      let newAnders = new Anders({
        emotionName: newEmotion.emotionName,
        userId: newEmotion.userId
      });
      newAnders
        .save()
        .then((data) => {})
        .catch((e) => {
          console.log("CREATE");

          console.log(e);
        });
    });
    return res.send(data);
  },

  update(req, res) {
    console.log("UPDATE: ", req.params);
    Anders.findOne(req.params.id).then((data) => {
      data.emotionName = req.body.emotionName;
    });
    Anders.save()
      .then((data) => {
        return res.send(data);
      })
      .catch((e) => {
        console.log("UPDATE");

        console.log(e);
      });
  },

  destroy(req, res) {
    console.log("destroy anders");
    Anders.findOneAndDelete({ emotionName: req.params.emotionName })
      .then((data) => {
        return res.send(data);
      })
      .catch((e) => {
        console.log("DESTROY");
        console.log(e);
      });
  },
};
