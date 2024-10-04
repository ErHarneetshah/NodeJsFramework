const express = require("express");
const router = express.Router();
const testModule = require("../models/userModule.js");

router.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

router.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

router.get("/moduleTesting", (req, res) => {
  const createTable = new testModule();
  let responseValue = createTable.createTable();
  res.set("Content-Type", "text/html");
  if (responseValue) {
    res.status(200).send("<h1>Table Created Successfully</h1>");
  } else {
    res.status(200).send(responseValue);
  }
});

module.exports = router;
