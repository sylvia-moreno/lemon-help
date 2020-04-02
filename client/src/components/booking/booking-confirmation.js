import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

const BookingConfirmation = props => {
  debugger;
  
  const {
    foodType,
    foodPreference,
    mealType,
    serviceType,
    numberOfClient,
    selectedDate
  } = props.selectedService;

  const {
    username,
  } = props.selectedMaid;

  const { selectedMaid } = props.selectedMaid;

  const COOKING = serviceType === "cuisine";
  const CLEANING = serviceType === "ménage";
  const BABYSITTING = serviceType === "babysitting";
  
  const handleSubmit = event => {
    event.preventDefault();
    props.history.push("/payment");
  };

  return (
    <form className="booking-confirmation" onSubmit={handleSubmit}>
      {selectedMaid !== null || selectedMaid !== undefined ? (
        <>
          <h2>Prestation : {serviceType}</h2>
          <ul>
            <li>
              <span className="label">Votre lemonMaid</span>
              <span className="name">{username}</span>
            </li>
            {COOKING ? (
              <>
                <li>
                  <span className="label">Pratique alimentaire</span>
                  <span className="name">
                    {foodPreference}
                  </span>
                </li>
                <li>
                  <span className="label">Type de cuisine</span>
                  <span className="name">{foodType}</span>
                </li>
                <li>
                  <span className="label">Type de repas</span>
                  <span className="name">{mealType}</span>
                </li>
                <li>
                  <span className="label">Nombre de client</span>
                  <span className="name">
                    {numberOfClient}
                  </span>
                </li>
                <li>
                  <span className="label">Date</span>
                  <span className="name">
                    {selectedDate.toLocaleDateString()}
                  </span>
                </li>
                <li>
                  <span className="label">Heure</span>
                  <span className="name">
                    {selectedDate.toLocaleTimeString()}
                  </span>
                </li>
              </>
            ) : (
              <li>
                <span className="label"></span>
                <span className="name"></span>
              </li>
            )}
          </ul>
          <button className="btn-cta" onClick={handleSubmit}>
            Valider et payer
          </button>
        </>
      ) : (
        <>
          <p>Ooops... Pas si vite, il faut chercher avant de trouver le bon <FontAwesomeIcon icon={faLemon} /></p>
          <p>
            <a href="/" className="btn-cta">
              Choisir un service
            </a>
          </p>
        </>
      )}
    </form>
  );
};

export default BookingConfirmation;
