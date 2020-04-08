const express = require("express");
const router = express.Router();
const CookingService = require("../models/CookingService");
const User = require("../models/User");
const Maid = require("../models/Maid");

router.post("/booking-confirmation", async (req, res, next) => {
  const foodType = req.body.foodType;
  const foodPreference = req.body.foodPreference;
  const mealType = req.body.mealType;
  const name = req.body.serviceType;
  const numberOfClient = req.body.numberOfClient;
  const date = req.body.selectedDate;
  const maid = req.body.selectedMaid;
  const status = req.body.status;

  const userID = req.body.userID;
  const client = userID;

  CookingService.findOne( maid._id , "_id", (err, service) => {
  //Maid.findOne({ _id: maid._id }).then(maid => {
    console.log('maid', maid)
    const newCookingService = new CookingService({
      foodType,
      foodPreference,
      mealType,
      name,
      numberOfClient,
      date,
      maid,
      client,
      status
    });

    newCookingService.save().then(service => {
      console.log('service', service)
    

    //CookingService.find({ client: userID }).then(service => {
      //console.log("service", service);
      User.findOneAndUpdate(
        { _id: userID },
        { $push: { services: service } }
      )
      //.populate({'maid': maid})
        //.populate({path: 'services', model: newCookingService})
        .then(user => {
          //user.services.push(service);
          res.status(201).json("le service a été ajouté au user");
        })

        .catch(err => {
          res.status(500).json({
            message: err,
            err
          });
        });
    });
  });

  //res.status(403).json({message: 'le service nexiste pas'});
});

router.get("/payment-success", (req, res) => {
  req.logout();
  res.status(204).send();
});

router.get("/booking-list", (req, res) => {
  const userID = req.user._id;

  User.findOne({ _id: userID })
    .then(user => {
      console.log("user booking-list", user);
      res.status(201).json(user.services);
    })
    .catch(err => {
      res.status(500).json({
        message: err,
        err
      });
    });
});

module.exports = router;
