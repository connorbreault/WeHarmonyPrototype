const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const router = express.Router();

var PORT = 3001;
var cors = require("cors");
app.use(cors());

const dbRoute =
    "mongodb+srv://beststudentsever:<PASSWORD>@weharmonyprototype-cc1dm.mongodb.net/weHarmony?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getUserData", (req, res) => {
    var cursor = db.collection("Users").find();
    var users = [];

    cursor.stream()
        .on("data", function (user) {
            users.push(user);
        })
        .on("error", function (err) {
            console.log(err);
        })
        .on("end", function () {
            return res.json({ success: true, data: users });
        });
});

app.use("/api", router);

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});