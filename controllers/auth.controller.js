const config = require("../config/auth.config");
const User = require('../models/user.model');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log(req.body)
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    dateOfBirth: req.body.dateOfBirth,
    name: req.body.name,
  });

  user.save((err, user) => {
    console.log(user)
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  console.log(req.body)
  User.findOne({
    username: req.body.username,
  }).then((user, err) => {
    if (err) {
      console.log("error: ",err)
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      name: user.name,
      dateOfBirth: user.dateOfBirth,
      accessToken: token,
    });
  });
};
