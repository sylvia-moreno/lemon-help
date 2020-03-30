import React from "react";

import service from "../../services/services";

const BookingConfirmation = (props) => {
  debugger;
  const COOKING = props.selectedService.serviceType === "cuisine";
  const CLEANING = props.selectedService.serviceType === "ménage";
  const BABYSITTING = props.selectedService.serviceType === "babysitting";
  
  const handleSubmit = event => {
    event.preventDefault();

    //faire appel à un service par type de service
    serviceCooking
      .bookingService(foodType, foodPreference, mealType, serviceType)
      .then(data => {
        const preferencesUser = {
          foodType,
          foodPreference,
          mealType,
          serviceType,
          numberOfClient,
          selectedDate
        };
        setMaids(data);
        updateMaid(data);
        selectedService(preferencesUser);
        history.push("/booking");
      })
      .catch(err => err);
  };

  return (
    <form className="booking-confirmation" onSubmit={handleSubmit}>
      <h2>Prestation : {props.selectedService.serviceType}</h2>
      <ul>
        <li>
          <span className="label">Votre lemonMaid</span>
          <span className="name">{props.selectedMaid.username}</span>
        </li>
        {COOKING ? (
          <>
            <li>
              <span className="label">Pratique alimentaire</span>
              <span className="name">{props.selectedService.foodPreference}</span>
            </li>
            <li>
              <span className="label">Type de cuisine</span>
              <span className="name">{props.selectedService.foodType}</span>
            </li>
            <li>
              <span className="label">Type de repas</span>
              <span className="name">{props.selectedService.mealType}</span>
            </li>
            <li>
              <span className="label">Nombre de client</span>
              <span className="name">{props.selectedService.numberOfClient}</span>
            </li>
            <li>
              <span className="label">Date</span>
              <span className="name">{props.selectedService.selectedDate.toLocaleDateString()}</span>
            </li>
            <li>
              <span className="label">Heure</span>
              <span className="name">{props.selectedService.selectedDate.toLocaleTimeString()}</span>
            </li>
          </>
        ) : (
          <li>
            <span className="label"></span>
            <span className="name"></span>
          </li>
        )}
      </ul>
      <button className="btn-cta" onClick={handleSubmit}>Valider et payer</button>
    </form>
  );
};

export default BookingConfirmation;
