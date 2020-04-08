import React, { useEffect } from "react";

import CardProfil from "../card-profil/card-profil";

import "./booking.scss";

const Booking = (props) => {

  useEffect(() => {
    props.currentPageName("Réservation");
  }, []);

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div className="booking wrapper">
      <h2 className="booking-title">
        Voici les lemonMaids qui feront votre bonheur
      </h2>
      <div className="booking-content">
        {props.maids.length > 0 ? (
          props.maids.map((maid, i) => <CardProfil maid={maid} service={props.selectedService.serviceType} selectedMaid={props.selectedMaid} history={props.history} key={i} />)
        ) : (
          <div className="alignCenter">
            <p>Nous n'avons pas encore trouvés cette perle rare ... </p>
            <p>
              <button onClick={goBack} className="btn-cta">
                Recherche un service
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
