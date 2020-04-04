import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import IconPromoCode from "../icons/icon-promocode";
import IconVisa from "../icons/icon-visa";
import IconPaypal from "../icons/icon-paypal";
import IconHand from "../icons/icon-hand";

import "./booking.scss";
import "../form/radio-button-icon/radio-button-icon.scss";
import BookingPaymentItem from "./booking-payment-item";

const BookingConfirmation = props => {
  debugger;
  const [hasChecked, setHasChecked] = useState(false);
  const [methodPaymentSelected, setMethodPaymentSelected] = useState("");

  const {
    foodType,
    foodPreference,
    mealType,
    serviceType,
    numberOfClient,
    selectedDate
  } = props.selectedService;

  const { username } = props.selectedMaid;

  const { selectedMaid } = props.selectedMaid;

  const COOKING = serviceType === "cuisine";
  const CLEANING = serviceType === "ménage";
  const BABYSITTING = serviceType === "babysitting";

  const paymentMethods = [
    {
      label: "Visa",
      icon: <IconVisa />,
      code: "visa"
    },
    {
      label: "Paypal",
      icon: <IconPaypal />,
      code: "paypal"
    },
    {
      label: "Paiement en main propre",
      icon: <IconHand />,
      code: "paymentByHand"
    }
  ];

  const handleCheckMethodPayment = methodPayment => {
    setMethodPaymentSelected(methodPayment);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push("/payment");
  };

  return (
    <form className="booking-confirmation wrapper" onSubmit={handleSubmit}>
      {selectedMaid !== null || selectedMaid !== undefined ? (
        <>
          <h2>Prestation : {serviceType}</h2>
          <div className="booking-confirmation--recap">
            <div className="header">
              <p className="service-name">{serviceType}</p>
              <div className="service-date">
                <p>{selectedDate.toLocaleTimeString()}</p>
                <p>{selectedDate.toLocaleDateString()}</p>
              </div>
            </div>
            <div className="service-detail">
              <p className="details">
                {COOKING ? (
                  <>
                    <p>
                      {" "}
                      Pour un <strong>{mealType}</strong> plutôt{" "}
                      <strong>{foodPreference}</strong> au goût{" "}
                      <strong>{foodType}</strong> pour{" "}
                      <strong>{numberOfClient} personne(s)</strong>
                    </p>
                    <p>préparé par <strong>{username}</strong></p>
                  </>
                ) : (
                  <div>ddd</div>
                )}
              </p>
            </div>
          </div>
          <ul className="booking-confirmation--recap">
            <li>
              <span className="label">Votre lemonMaid</span>
              <span className="name">{username}</span>
            </li>
            {COOKING ? (
              <>
                <li>
                  <span className="label">Pratique alimentaire</span>
                  <span className="name">{foodPreference}</span>
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
                  <span className="name">{numberOfClient}</span>
                </li>
                <li>
                  <span className="label">Pour le </span>
                  <span className="name">
                    {selectedDate.toLocaleDateString()}
                  </span>
                </li>
                <li>
                  <span className="label">A</span>
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
          <div className="booking-confirmation--promo-code">
            <div className="radio-button-icon">
              <div className="radio-button-icon--icon">
                <IconPromoCode />
              </div>
              <input
                className="radio-button-icon--input"
                value="codepromo"
                name="codepromo"
                type="radio"
              />
              <label className="radio-button-icon--label">
                Ajouter un code promo
              </label>
            </div>
          </div>
          <div className="booking-confirmation--paiement">
            <p className="title">Paiement</p>
            {paymentMethods.map((method, i) => (
              <BookingPaymentItem
                label={method.label}
                icon={method.icon}
                methodName={method.code}
                hasChecked={handleCheckMethodPayment}
                key={i}
              />
            ))}
          </div>
          <button className="btn-cta" onClick={handleSubmit}>
            Valider et payer
          </button>
        </>
      ) : (
        <>
          <p>
            Ooops... Pas si vite, il faut chercher avant de trouver le bon{" "}
            <FontAwesomeIcon icon={faLemon} />
          </p>
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
