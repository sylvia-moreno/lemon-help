import React, { useState, useEffect } from "react";

import serviceCooking from "../../services/booking";
import BookingPaymentItem from "./booking-payment-item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import IconPromoCode from "../icons/icon-promocode";
import IconVisa from "../icons/icon-visa";
import IconPaypal from "../icons/icon-paypal";
import IconHand from "../icons/icon-hand";

import "./booking.scss";
import "../form/radio-button-icon/radio-button-icon.scss";

const BookingConfirmation = props => {
  const [hasChecked, setHasChecked] = useState(false);
  const [methodPaymentSelected, setMethodPaymentSelected] = useState("");
  const [account, setAccount] = useState();

  useEffect(() => {
    const priceService =
      props.serviceType === "cuisine" ? props.selectedMaid.rate : 0;
    const price = priceService * props.selectedService.numberOfClient;
    const pourcent = (price * 10) / 100;
    setAccount(price + pourcent);
  }, []);

  useEffect(() => {
    props.currentPageName("Confirmation & Paiement");
  }, []);

  const {
    foodType,
    foodPreference,
    mealType,
    serviceType,
    numberOfClient,
    selectedDate
  } = props.selectedService;
  const { username, rate } = props.selectedMaid;
  
  const COOKING = serviceType === "cuisine";
  const CLEANING = serviceType === "ménage";
  const BABYSITTING = serviceType === "babysitting";
  const status = "pending";

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
          status,
          methodPaymentSelected
        )
        .then(data => {
          props.history.push("/payment-success");
        })
        .catch(err => err);
    }
  };

  return (
    <form className="booking-confirmation wrapper" onSubmit={handleSubmit}>
      {props.selectedMaid !== undefined ? (
        <>
          <div className="booking-confirmation--recap">
            <div className="header">
              <p className="service-name">{serviceType}</p>
              <div className="service-date">
                {!!selectedDate && (
                  <>
                    <p>{selectedDate.toLocaleTimeString()}</p>
                    <p>{selectedDate.toLocaleDateString()}</p>
                  </>
                )}
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
                    <p>
                      préparé par <strong>{username}</strong>
                    </p>
                  </>
                ) : (
                  <div>ddd</div>
                )}
              </p>
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

          <div className="booking-confirmation--promo-code">
            <p className="title">Code promo</p>
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

          <div className="booking-confirmation--total">
            <ul className="booking-confirmation--total-list">
              <li className="item">
                <span className="label">Total</span>
                <span>{account}</span>
              </li>
              <li className="item">
                <span className="label">Frais de déplacement</span>
                <span>Gratuit</span>
              </li>
            </ul>
          </div>

          <div className="alignCenter">
            <button className="btn-cta" onClick={handleSubmit}>
              Valider et payer
            </button>
          </div>
        </>
      ) : (
        <div className="alignCenter">
          <p>
            Ooops... Pas si vite, il faut chercher avant de trouver le bon{" "}
            <FontAwesomeIcon icon={faLemon} />
          </p>
          <p className="alignCenter">
            <a href="/" className="btn-cta">
              Choisir un service
            </a>
          </p>
        </div>
      )}
    </form>
  );
};

export default BookingConfirmation;
