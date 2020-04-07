import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";

import "./select-checkbox.scss";

const icons = {
  COOKING: faCookieBite,
  CLEANING: faBroom,
  BABYSITTING: faBaby
};

const SelectCheckbox = props => {
  ;
  return (
    <div
      className={classNames("select-checkbox", {
        "select-checkbox--checked": props.isSelected
      })}
    >
      <FontAwesomeIcon icon={icons[props.value]} />
      <label>{props.label}</label>
      <input
        type="checkbox"
        name={props.name}
        value={props.name}
        checked={props.isSelected}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SelectCheckbox;
