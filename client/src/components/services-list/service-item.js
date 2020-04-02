import React from "react";
import { useState, useCallback } from "react";

import SelectCheckbox from "../select-checkbox/select-checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";

import IconCooking from "../icons/icon-cooking";
import IconCleaning from "../icons/icon-cleaning";
import IconBabysitting from "../icons/icon-babysitting";

import "./service-item.scss";

const icons = [
  {
    label: "cuisiner",
    icon: <IconCooking />,
    code: "COOKING"
  },
  {
    label: "ménage",
    icon: <IconCleaning />,
    code: "CLEANING"
  },
  {
    label: "babysitting",
    icon: <IconBabysitting />,
    code: "BABYSITTING"
  }
];

const ServiceItem = ({ serviceValue, serviceName, hasChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handledChange = useCallback(e => {
    if (e.target.checked) {
      e.target.checked ? setIsChecked(true) : setIsChecked(false);
      hasChecked(e.target.checked, serviceValue);
    }
  }, []);

  const servicesWithIcons = icons.find(serviceIcon =>
    serviceValue[0].includes(serviceIcon.code)
  );

  debugger;
  return (
    <>
      <div
        className={
          isChecked
            ? "list-service-item list-service-item--checked"
            : "list-service-item"
        }
      >
        <label className="list-service-item--content">
          <div className="list-service-item--icon">
            
                <div className="list-service-item--icon-container">
                  {servicesWithIcons.icon}
                </div>
                <span className="list-service-item--icon-label">
                  {servicesWithIcons.label}
                </span>
              
          </div>
          <input
            type="checkbox"
            className="list-service-item--checkbox"
            onChange={handledChange}
          />
        </label>
      </div>

      
    </>
  );
};

export default ServiceItem;
