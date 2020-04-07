const express = require("express");
const passport = require('passport');
const router = express.Router();
const Maid = require("../models/Maid");


router.get("/landing-page", (req, res, next) => {
    
    console.log('landing-page');
    
    Maid.find().then(maids => {  
        
        res.status(500).json({data: maids});
    });
});

module.exports = router;