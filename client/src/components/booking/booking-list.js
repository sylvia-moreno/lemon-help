import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { isEmpty } from "lodash";

import bookingService from "../../services/booking";

import "./booking.scss";
import "../card-profil/card-profil.scss";

const BookingList = ({
  history,
  selectedService,
  selectedMaid,
  user,
  currentPageName
}) => {
  debugger;
  const [services, setServices] = useState({});
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    currentPageName("Vos réservations");
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="booking-list wrapper">
      {!!user && user.services.length > 1 ? (
        user.services.map((service, i) => (
          <div className="booking-list--item" key={i}>
            {!!service.date && (
              <p className="title">
                {`Service réservé le ${new Date(
                  service.date
                ).toLocaleDateString()}`}
              </p>
            )}
            <div className="card-profil">
              <div className="card-profil--img">
                <span className="card-profil--img-container">
                  <img
                    src={
                      !!service.maid
                        ? service.maid.imageProfil
                        : "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_1280.png"
                    }
                    alt="img profil"
                  />
                </span>
              </div>
              <div className="card-profil--info">
                <div className="block">
                  <div className="container">
                    <p className="container-name">
                      {!!service.maid ? service.maid.username : ""}
                    </p>
                    <p className="container-service">{service.name}</p>
                    <p
                      className={classNames("container-status", {
                        "container-status--pending":
                          service.status === "pending",
                        "container-status--done": service.status === "done"
                      })}
                    >
                      {service.status === "pending"
                        ? "En attente de validation"
                        : "Réalisée"}
                    </p>
                  </div>
                </div>
                <div className="block">
                  <div className="container-cta">
                    <Link
                      to={`/review/${service.id}`}
                      className={classNames(
                        "bta-link--NoBg container-show-profil",
                        {
                          "status--pending": service.status === "pending"
                        }
                      )}
                      disabled={service.status === "pending" ? true : false}
                    >
                      Laisser un avis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alignCenter">
          <p>Vous m'avez pas de réservations </p>
          <button onClick={goBack} className="btn-cta">
            Recherche un service
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingList;
