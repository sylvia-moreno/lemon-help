const express = require("express");
const passport = require('passport');
const router = express.Router();
const Maid = require("../models/Maid");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theMaid, failureDetails) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong authenticating Maid'});
      return;
    }
  
    if (!theMaid) {
      res.status(401).json(failureDetails); // `failureDetails` contains the error messages from our logic in "LocalStrategy" {message: '…'}.
      return;
    }

    // save Maid in session
    req.login(theMaid, (err) => {
      if (err) {
        res.status(500).json({message: 'Session save went bad.'});
        return;
      }

      // We are now logged in (thats why we can also send req.Maid)
      res.status(200).json(theMaid);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const imageProfil = req.body.imageProfil;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  const cityName = req.body.cityName;
  const cityCode = req.body.cityCode;
  const country = req.body.country;
  const experience = req.body.experience;   
  const rating = req.body.rating;   
  const gender = req.body.gender;   
  const services = req.body.services;   
  const curriculumvitae = req.body.curriculumvitae;   
   

  if (!email || !password) {
    res.status(400).json({message: "Indicate email and password"});
    return;
  }

  Maid.findOne({ email }, "email", (err, maid) => {
    if (maid !== null) {
      res.status(400).json({ message: "The email already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newMaid = new Maid({
      email,
      password: hashPass,
      username,
      imageProfil,
      phoneNumber,
      address,
      cityName,
      cityCode,
      country,
      experience,
      rating,  
      gender,
      services,
      curriculumvitae,
    });

    newMaid.save()
    .then(() => {
      req.login(newMaid, (err) => {
        if (err) {
          res.status(500).json({message: 'Login after signup went bad.'});
          return;
        }
    
        res.status(201).json(newMaid);
      });
    })
    .catch(err => {
      res.status(500).json({message: "Something went wrong"});
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(204).send();
});

/*router.get("/landing-page", (req, res, next) => {
  if (req.Maid) {
    res.status(200).json(req.Maid);
    return;
  }

  res.status(403).json({message: 'Unauthorized'});
});*/

router.get("/", async (req, res, next) => {
  
  await Maid
    .find()
    .then(maids => {
      res.status(201).json(maids);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong during maids request" });
    });
  
    res.status(403).json({message: 'toto'});
});



router.post("/edit", (req, res, next) => {
  // Check Maid is logged in
  if (!req.Maid) {
    res.status(401).json({message: "You need to be logged in to edit your profile"});
    return;
  }

  // Updating `req.Maid` with each `req.body` field (excluding some internal fields `cannotUpdateFields`)
  const cannotUpdateFields = ['_id', 'password'];
  Object.keys(req.body).filter(key => cannotUpdateFields.indexOf(key) === -1).forEach(key => {
    req.Maid[key] = req.body[key];
  });

  // Validating Maid with its new values (see: https://mongoosejs.com/docs/validation.html#async-custom-validators)
  req.Maid.validate(function (error) {
    if (error) {
      // see: https://mongoosejs.com/docs/validation.html#validation-errors
      res.status(400).json({message: error.errors});
      return;
    }

    // Validation ok, let save it
    req.Maid.save(function (err) {
      if (err) {
        res.status(500).json({message: 'Error while saving Maid into DB.'});
        return;
      }

      res.status(200).json(req.Maid);
    })
  });
});

module.exports = router;
