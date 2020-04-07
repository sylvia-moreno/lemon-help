import React from "react";
import { Link } from "react-router-dom";

import IconBooking from "../icons/icon-booking";

import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar--list">
        <li className="nav-bar--item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-bar--item">
          <Link to="/bookings">
            <IconBooking />
            Réservations
          </Link>
        </li>
        <li className="nav-bar--item">
          <Link to="/profil">Profil</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
