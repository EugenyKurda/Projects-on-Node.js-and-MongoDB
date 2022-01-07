const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');
const bodyParser = require("body-parser");
const postRoutes = require("./server/routes/posts");
const categoryRoutes = require("./server/routes/categories");
const tagRoutes = require("./server/routes/tags");
const authorRoutes = require("./server/routes/authors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const getActualRequestDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};


let demoLogger = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
    let log = `[${formatted_date}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;
    console.log(log);
    log = JSON.stringify(log)
    fs.appendFile("logs.json", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};

app.use(demoLogger);

app.use(postRoutes);
app.use(categoryRoutes);
app.use(tagRoutes);
app.use(authorRoutes);

mongoose.connect("mongodb+srv://eugeny:12345trewq@cluster0.gcbjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const PORT = 3000;

app.listen(PORT, () => console.log("Server started"));

