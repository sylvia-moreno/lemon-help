import React, { useState } from "react";
import classNames from "classnames";

import './counter.scss';

const Counter = props => {
  const [count, setCount] = useState(1);
  const [isBtnIncClick, setIsBtnIncClick] = useState(false);
  const [isBtnDecClick, setIsBtnDecClick] = useState(false);

  const label = {
    COOKING: "personne(s) pour ce repas",
    CLEANING: "personne(s) dans le foyer",
    BABYSITTING: "enfant(s) à garder"
  };

  const decrementCount = e => {
    e.preventDefault();
    setCount(count - 1);
    setIsBtnDecClick(true);
    setIsBtnIncClick(false);

  };
  const incrementCount = e => {
    e.preventDefault();
    setCount(count + 1);
    setIsBtnIncClick(true);
    setIsBtnDecClick(false);

  };

  return (
    <div className="counter">
      <span className="counter-label">
        {count} {label[props.serviceType]}
      </span>
      <div className="counter-btn">
        <button
          className={classNames("counter-btn--elt", {"counter-btn--elt-is-click": isBtnDecClick})}
          onClick={decrementCount}
          disabled={count < 2}
        >
          <span className="counter-btn--symbol">-</span>
        </button>
        <button
          className={classNames("counter-btn--elt", {"counter-btn--elt-is-click": isBtnIncClick})}
          onClick={incrementCount}
          disabled={count > 9}
        >
          <span className="counter-btn--symbol">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
