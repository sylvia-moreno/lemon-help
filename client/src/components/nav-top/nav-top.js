import React, { useEffect, useState } from "react";
import classNames from "classnames";


import IconArrow from "../icons/icon-arrow";
import "./nav-top.scss";

const NavTop = ({ currentPageName, history }) => {
  const [isVisible, setIsVisible] = useState(true);
  const urlLocation = history.location.pathname;

  useEffect(() => {
    const urlNotAuthorized = [
      "/",
      "/login",
      "/login-maid",
      "/signup",
      "/signup-maid",
      "/payment-success"
    ];
    return urlNotAuthorized.includes(urlLocation) ? setIsVisible(false) : setIsVisible(true);
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
