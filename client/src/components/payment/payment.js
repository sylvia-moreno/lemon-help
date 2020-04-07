import React, { useState, useEffect } from "react";

import serviceCooking from "../../services/booking";

const Payment = props => {
  ;
  const [account, setAccount] = useState();

  useEffect(() => {
    const priceService =
      props.serviceType === "cuisine" ? props.selectedMaid.rate : 0;
    const price = priceService * props.selectedService.numberOfClient;
    const pourcent = (price * 10) / 100;
    setAccount(price + pourcent);
  }, []);

  const {
    foodType,
    foodPreference,
    mealType,
    serviceType,
    numberOfClient,
    selectedDate
  } = props.selectedService;

  

  const COOKING = serviceType === "cuisine";
  const CLEANING = serviceType === "ménage";
  const BABYSITTING = serviceType === "babysitting";
  const status = "pending";

  const handleSubmit = event => {
    event.preventDefault();

    //faire appel à un service par type de service
    // envoyer le service cooking dans le champs "service" du user
    if (COOKING) {
      serviceCooking
        .bookingCookingService(
          foodType,
          foodPreference,
          mealType,
          serviceType,
          numberOfClient,
          selectedDate,
          props.selectedMaid,
          props.user._id,
          status
        )
        .then(data => {
          ;
          props.history.push("/payment-success");
        })
        .catch(err => err);
    }
  };

  return (
    <form className="payment" onSubmit={handleSubmit}>
      <div className="payment-summary">
        <ul className="payment-summary--list">
          <li className="payment-summary--item">
            <span className="label">{serviceType}</span>
            <span className="price">
              {COOKING
                ? (!!props.selectedMaid.rate ? (props.selectedMaid.rate + "€/pers.") : "0€/pers.")
                : "-"}
            </span>
          </li>
          <li className="payment-summary--item">
            <span className="label">Taxe</span>
            <span className="price">10%</span>
          </li>
          <li className="payment-summary--item">
            <span className="label-total">Total</span>
            <span className="price">{account}€</span>
          </li>
        </ul>
      </div>

      <div className="payment-adress">
        <p className="payment-adress--label">Lieu du service</p>
        <div className="payment-adress--container">
          <p className="payment-adress--label">
            {!!props.user.address} {props.user.cityName} {props.user.cityCode} {props.user.country}
          </p>
        </div>
      </div>

      <div className="payment-card">fff</div>
    </form>
  );
};

export default Payment;
