var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()


const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");
const dbConfig = require ("./config/db.config");
var corsOptions = {
  origin: '*'
};




console.log(process.env.DB_CONNECTION)



db.mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

// On Error
db.mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

//routes

const anders = require('./routes/anders');
const emotion = require('./routes/emotion');



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));





  




app.use("/", anders);
app.use("/", emotion);

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

