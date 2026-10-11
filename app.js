const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");
const path = require("path");
const app = express();

mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() =>
        console.log("Connected to MongoDB"))
    .catch(err =>
        console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", studentRoutes); 
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
