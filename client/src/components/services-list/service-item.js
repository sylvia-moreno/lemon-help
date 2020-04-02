import React from "react";
import { useState, useCallback } from "react";
import Checkbox from "@material-ui/core/Checkbox";

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
  const [checked, setChecked] = React.useState(false);

  const handledChange = useCallback(e => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      e.target.checked ? setIsChecked(true) : setIsChecked(false);
      hasChecked(e.target.checked, serviceValue);
    }
  }, []);

  const servicesWithIcons = icons.find(serviceIcon =>
    serviceValue[0].includes(serviceIcon.code)
  );
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
          <Checkbox
            checked={checked}
            onChange={handledChange}
            disabled={serviceName === "babysitting" || serviceName === "ménage" ? true : false}
            inputProps={{ "aria-label": "service choise checkbox" }}
          />
        </label>
      </div>
    </>
  );
};

export default ServiceItem;
