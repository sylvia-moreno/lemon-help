const express = require("express");
const router = express.Router();
const CookingService = require("../models/CookingService");
const User = require("../models/User");

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

  newCookingService.save();

  CookingService.findOne({ client: userID }).then(service => {
    console.log("service", service);
    User.findOneAndUpdate({ _id: userID }, { $push: { services: service } })
      //.populate({path: 'services', model: newCookingService})
      .then(user => {
        console.log("user", user);

        //user.services.push(service);
        console.log("user", user);
        res.status(201).json("le service a été ajouté au user");
      })

      .catch(err => {
        res.status(500).json({
          message: err,
          err
        });
      });
  });

  //res.status(403).json({message: 'le service nexiste pas'});
});

router.get("/payment-success", (req, res) => {
  req.logout();
  res.status(204).send();
});

module.exports = router;
