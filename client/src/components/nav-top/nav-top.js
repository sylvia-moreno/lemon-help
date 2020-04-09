import React, { useEffect, useState } from "react";
import classNames from "classnames";


import IconArrow from "../icons/icon-arrow";
import "./nav-top.scss";

const NavTop = ({ currentPageName, history }) => {
  const [isVisible, setIsVisible] = useState(true);
  const urlLocation = history.location.pathname;

  useEffect(() => {
    const urlAuthorized = [
      "/cooking-service",
      "/booking",
      "/booking-confirmation",
      "/booking-list",
    ];
    return urlAuthorized.includes(urlLocation) ? setIsVisible(true) : setIsVisible(false);
  }, [urlLocation]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={classNames("nav-top", { "nav-top--notVisible": !isVisible })}>
      <button onClick={goBack}>
        <span className="nav-top--arrow">
          <IconArrow />
        </span>
        <p className="nav-top--name">{currentPageName}</p>
      </button>
    </div>
  );
};

export default NavTop;
