const express = require("express");
const router = express.Router();
const Cooking = require("../models/Cooking");
const Cleaning = require("../models/Cleaning");

router.get("/", async (req, res, next) => {
    await Cooking
    .find()
    .then(cooking => {
      res.status(201).json(cooking);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong cooking services request" });
    });
  
    res.status(403).json({message: 'toto'});
})

/*router.post("/proceed", (req, res, next) => {
    const serviceName = req.body.serviceName;
})*/