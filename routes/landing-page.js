const express = require("express");
const passport = require('passport');
const router = express.Router();
const Maid = require("../models/Maid");

debugger
router.get("/landing-page", (req, res, next) => {
    debugger
    console.log('landing-page');
    debugger
    Maid.find().then(maids => {  
        debugger
        res.status(500).json({data: maids});
    });
});

module.exports = router;