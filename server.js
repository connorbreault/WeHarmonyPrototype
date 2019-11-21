const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const app = express();
var PORT = process.env.PORT || 3001;
var cors = require("cors");
app.use(cors());
const router = express.Router();

const dbRoute =
    "mongodb+srv://weharmony:<PASSWORD>@weharmony-rg9xb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getUserData", (req, res) => {
    var cursor = db.collection("weHarmony").find();
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