import React from "react";
import { useState, useCallback } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./booking-payment-item.scss";



const BookingPaymentItem = ({ label, icon, methodName, hasChecked }) => {
    
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handledChange = useCallback(e => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      e.target.checked ? setIsChecked(true) : setIsChecked(false);
      hasChecked(e.target.checked);
    }
  }, []);

  return (
    <>
      <div
        className={
          isChecked
            ? "booking-payment-item booking-payment-item--checked"
            : "booking-payment-item"
        }
      >
        <label className="booking-payment-item--content">
          <div className="booking-payment-item--icon">
            <div className="booking-payment-item--icon-container">
              {icon}
            </div>
            <span className="booking-payment-item--icon-label">
              {label} <span className="code-card">{methodName === "visa" ? " xxxx 2536 1725" : ""}</span>
            </span>
          </div>
          <Checkbox
            checked={checked}
            onChange={handledChange}
            disabled={methodName === "paypal" || methodName === "paymentByHand" ? true : false}
            inputProps={{ "aria-label": "service choise checkbox" }}
          />
        </label>
      </div>
    </>
  );
};

export default BookingPaymentItem;
