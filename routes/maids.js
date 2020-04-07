const express = require("express");
const passport = require('passport');
const router = express.Router();
const Maid = require("../models/Maid");
const uploader = require('../configs/cloudinary-setup.js');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login-maid", (req, res, next) => {
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

router.post("/signup-maid", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const address = req.body.address;
  const cityName = req.body.cityName;
  const cityCode = req.body.cityCode;
  const country = req.body.country;
  const imageProfil = req.body.imageProfil;
  const phoneNumber = req.body.phoneNumber;
  const experience = req.body.experience;
  const profession = req.body.profession;
  const speciality = req.body.speciality;
  const foodPractice = req.body.foodPractice;
  const curriculumvitae = req.body.curriculumvitae;
  const rate = req.body.rate;
  const rating = req.body.rating;

  console.log('req body email', email);

  if (!email || !password) {
    res
      .status(400)
      .json({
        message: "Veuillez remplir votre email ainsi que votre mot de passe"
      });
    return;
  }

  Maid.findOne({ email }, "email", (err, maid) => {
    if (maid !== null) {
      res.status(400).json({ message: err });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newMaid = new Maid({
      email,
      password: hashPass,
      username,
      address,
      cityName,
      cityCode,
      country,
      imageProfil,
      phoneNumber,
      experience,
      profession,
      speciality,
      foodPractice,
      curriculumvitae,
      rate,
      rating,
    });

    newMaid
      .save()
      .then(() => {
        req.login(newMaid, err => {
          console.log('new maid', newMaid)
          if (err) {
            res.status(500).json({ message:  "Something went wrong: ", err });
            return;
          }

          console.log('new maid', newMaid)
          res.status(201).json(newMaid);
        });
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong: ", err });
      });
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

router.get("/", (req, res, next) => {

  Maid
    .find().then(maids => {
      res.status(201).json(maids);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong during maids request. See errors :", err });
    });
  
    //res.status(403).json({message: 'Maids are not find'});
});


router.get("/loggedin-maid", (req, res, next) => {
  ;
  if (req.maid) {
    ;
    res.status(200).json({ maid: req.maid });
    return;
  }

  res.status(403).json({ message: "Unauthorized" });
});

router.post("/edit-maid", (req, res, next) => {
  // Check Maid is logged in
  if (!req.maid) {
    res.status(401).json({message: "You need to be logged in to edit your profile"});
    return;
  }

  // Updating `req.Maid` with each `req.body` field (excluding some internal fields `cannotUpdateFields`)
  const cannotUpdateFields = ['_id', 'password'];
  Object.keys(req.body).filter(key => cannotUpdateFields.indexOf(key) === -1).forEach(key => {
    req.maid[key] = req.body[key];
  });

  // Validating Maid with its new values (see: https://mongoosejs.com/docs/validation.html#async-custom-validators)
  req.maid.validate(function (error) {
    if (error) {
      // see: https://mongoosejs.com/docs/validation.html#validation-errors
      res.status(400).json({message: error.errors});
      return;
    }

    // Validation ok, let save it
    req.maid.save(function (err) {
      if (err) {
        res.status(500).json({message: 'Error while saving Maid into DB.'});
        return;
      }

      res.status(200).json(req.maid);
    })
  });
});

router.post("/cooking-service", (req, res, next) => {
  
  const foodType = req.body.foodType;
  const foodPreference = req.body.foodPreference
  const mealType = req.body.mealType;
  const serviceType = req.body.serviceType;

  Maid.find({
    speciality: foodType,
    foodPractice: foodPreference,
    'listsOfDishs.type': mealType,
    services: serviceType,
  })
    .then(maidsList => {
      res.status(201).json(maidsList);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong during maids request", err });
    });
});


router.post('/upload', uploader.single("imageProfil"), (req, res, next) => {
    // console.log('file is: ', req.file)

    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    // get secure_url from the file object and save it in the 
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;
