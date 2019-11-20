// import express from "express";
// import mongoose from "mongoose";
// import exphbs from "express-handlebars";
// import axios from "axios";
// import cheerio from "cheerio";
// import logger from "morgan";

// const Data = require('./data');

// var app = express();
// var PORT = process.env.PORT || 3001;

// // Use morgan logger for logging requests
// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// // Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://weharmony:<password>@weharmony-rg9xb.mongodb.net/test?retryWrites=true&w=majority'
// mongoose.connect(MONGODB_URI)

// var db = mongoose.connection;

// // var databaseURL = "mongodb+srv://weharmony:<password>@weharmony-rg9xb.mongodb.net/test?retryWrites=true&w=majority";

// // var db = mongojs(databaseURL, articles);

// db.once('open', () => console.log('connected to the database'));

// db.on("error", () => console.log("There was an error:", error));

// app.get("/", function (req, res) {
//     Data.find((err, data) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data });
//     });

//     app.get("/user/:id", function (req, res) {
//         db.getUser.find({}, function (err, found) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(found);
//             }
//         });
//     });

//     // app.get("/reset", function (req, res) {
//     //     db.scrapeAltPress.drop()
//     //     res.send("reset");
//     // });

//     // app.get("/", function (req, res) {
//     //     axios.get("/").then(function (response) {
//     //     });
// });

// // Start the server
// app.listen(PORT, function () {
//     console.log("App running on port " + PORT + "!");
// });