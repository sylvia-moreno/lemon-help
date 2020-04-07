import React from "react";
import classNames from "classnames";

import "./capsule-button.scss";

const CapsuleButtonIcon = (props) => {

    return (
        <div className={classNames("capsule-button", { "capsule-button--checked": props.checked })}>
            <input className="capsule-button--input" onChange={props.onChange} value={props.value} name={props.name} type="radio" checked={props.checked} />
            <label className="capsule-button--label">{props.label}</label>
        </div>
    );
}

export default React.memo(CapsuleButtonIcon);