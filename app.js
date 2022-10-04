const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Server started");
});
