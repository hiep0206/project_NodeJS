require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./src/routes/authRoutes");
const itemRoutes = require("./src/routes/itemRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", authRoutes);

app.use("/items", itemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
