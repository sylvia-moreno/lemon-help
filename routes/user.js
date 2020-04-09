const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

router.get("/profil/:id", (req, res, next) => {
    console.log('req.params.id', req);
    User.findOne({ _id: req.params.id })
    .then(user => {
        console.log('user profil', user)
      res.status(200).json(req.user);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;
