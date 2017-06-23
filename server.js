// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var Saved = require("./models/Saved");
var app = express();
var PORT = process.env.PORT || 3000;

// ---------------------------------------------------

// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

// ---------------------------------------------------

mongoose.connect("mongodb://localhost/nytSearch");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    db.dropDatabase();
    console.log("Mongoose connection successful.");
});

// ---------------------------------------------------

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {

    Saved.find({}).sort([
        ["date", "descending"]
    ]).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });

});

app.post("/api", function(req, res) {

    console.log("SERVER.JS, LINE 56, REQ.BODY.TITLE: " + JSON.stringify(req.body.title));

    Saved.create({
        title: req.body.title,
        date: Date.now()
    }, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log("SERVER.JS, LINE 66, DOC: ", doc);
            res.send(doc);
        }
    });

});

// ---------------------------------------------------

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
