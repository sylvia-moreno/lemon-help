import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./radio-button-icon.scss";

const RadioButtonIcon = (props) => {

    return (
        <div className={classNames("radio-button-icon", { "radio-button-icon--checked": props.isSelected })}>
            <div className="radio-button-icon--icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <input className="radio-button-icon--input" id={props.id} onChange={props.onChange} value={props.value} name={props.name} type="radio" checked={props.isSelected} />
            <label className="radio-button-icon--label" htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButtonIcon;