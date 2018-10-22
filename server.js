var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
var PORT = 3000;
var app  = express();


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "handlebars");
app.set('views', __dirname + '/views');


mongoose.connect(MONGODB_URI);

require("./routes/api_routes.js")(app);
require("./routes/ejs_routes.js")(app);


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  