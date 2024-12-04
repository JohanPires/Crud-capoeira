const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const userRoutes = require("./Route/UserRoute");
const ressourceRoutes = require("./Route/RessourceRoute");
const eventRoutes = require("./Route/EventRoute");
const schoolRoutes = require("./Route/SchoolRoute");

const connect = process.env.CONNECT;

mongoose
  .connect(connect)
  .then(() => console.log("connexion réussi"))
  .catch(() => console.log("connexion échoué"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api", userRoutes);
app.use("/api", ressourceRoutes);
app.use("/api", eventRoutes);
app.use("/api", schoolRoutes);

module.exports = app;
