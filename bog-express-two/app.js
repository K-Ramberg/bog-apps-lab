require('dotenv').config()
var express = require('express');
const mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

var creaturesRouter = require('./routes/creatures');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/api/creatures', creaturesRouter);

module.exports = app;
