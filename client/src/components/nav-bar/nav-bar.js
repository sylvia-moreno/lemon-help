import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import IconBooking from "../icons/icon-booking";
import IconHome from "../icons/icon-home";
import IconProfile from "../icons/icon-profile";

import "./nav-bar.scss";

const NavBar = ({ history }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveBooking, setIsActiveBooking] = useState(false);
  const [isActiveProfil, setIsActiveProfil] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const urlLocation = history.location.pathname;

  useEffect(() => {
    const urlAuthorized = [
      "/",
      "/cooking-service",
      "/booking-list",
      "/profil"
    ];
    return urlAuthorized.includes(urlLocation)
      ? setIsVisible(true)
      : setIsVisible(false);
  }, [urlLocation]);

  useEffect(() => {
    const urlHome = "/";
    const urlBookingList = "/booking-list";
    const urlProfil = "/profil";

    switch (urlLocation) {
      case urlHome:
        setIsActiveHome(true);
        setIsActiveBooking(false);
        setIsActiveProfil(false);
        break;
      case urlBookingList:
        setIsActiveBooking(true);
        setIsActiveHome(false);
        setIsActiveProfil(false);
        break;
      case urlProfil:
        setIsActiveProfil(true);
        setIsActiveBooking(false);
        setIsActiveHome(false);
        break;
      default:
        console.log("");
    }
  }, [urlLocation]);

  return (
    isVisible && (
      <div
        className={classNames("nav-bar", { "nav-bar--notVisible": !isVisible })}
      >
        <ul className="nav-bar--list">
          <li
            className={classNames("nav-bar--item", {
              "nav-bar--item--isSelected": isActiveHome
            })}
          >
            <Link to="/">
              <IconHome />
              Accueil
            </Link>
          </li>
          <li
            className={classNames("nav-bar--item", {
              "nav-bar--item--isSelected": isActiveBooking
            })}
          >
            <Link to="/booking-list">
              <IconBooking />
              Réservations
            </Link>
          </li>
          <li
            className={classNames("nav-bar--item", {
              "nav-bar--item--isSelected": isActiveProfil
            })}
          >
            <Link to="/profil/:id">
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
