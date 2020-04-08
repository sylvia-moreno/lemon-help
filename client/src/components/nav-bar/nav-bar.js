import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import IconBooking from "../icons/icon-booking";
import IconHome from "../icons/icon-home";
import IconProfile from "../icons/icon-profile";

import "./nav-bar.scss";

const NavBar = ({ history }) => {
  debugger;
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const urlLocation = history.location.pathname;

  useEffect(() => {
    const urlNotAuthorized = [
      "/login",
      "/login-maid",
      "/signup",
      "/signup-maid",
      "/booking-confirmation",
      "/payment-success"
    ];
    return urlNotAuthorized.includes(urlLocation)
      ? setIsVisible(false)
      : setIsVisible(true);
  }, [urlLocation]);

  useEffect(() => {
    const urls = ["/", "/booking-list", "/profil"];
    return urls.includes(urlLocation) ? setIsActive(true) : setIsActive(false)
    
  }, [urlLocation]);

  return (
    isVisible && (
      <div className="nav-bar">
        <ul className="nav-bar--list">
          <li className={classNames("nav-bar--item", {"nav-bar--item--isSelected": isActive})}>
            <Link to="/">
              <IconHome />
              Accueil
            </Link>
          </li>
          <li className={classNames("nav-bar--item", {"nav-bar--item--isSelected": isActive})}>
            <Link to="/booking-list">
              <IconBooking />
              Réservations
            </Link>
          </li>
          <li className={classNames("nav-bar--item", {"nav-bar--item--isSelected": isActive})}>
            <Link to="/profil">
              <IconProfile />
              Profil
            </Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default NavBar;
