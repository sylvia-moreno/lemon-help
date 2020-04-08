import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { isEmpty } from "lodash";

import maidService from "../../services/maids";
import RatedProfil from "../rated-profil/rated-profil";
import ServiceItem from "../services-list/service-item";

import "../../styles/home.scss";
import "./auth.scss";

const Homepage = ({ user, history }) => {
  const [maids, setMaids] = useState([]);
  const [cookingServiceSelected, setCOOKINGServiceSelected] = useState();
  const [serviceSelected, setServiceSelected] = useState();
  const [displayCookingForm, setDisplayCookingForm] = useState(false);
  const [isUserNotLoadded, setIsUserNotLoadded] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (isEmpty(user)) {
      setIsUserNotLoadded(true);
    }
    maidService
      .getMaid()
      .then(data => setMaids(data))
      .catch(err => setMaids({}));
  }, [user]);

  const services = [
    { COOKING: "cuisiner" },
    { CLEANING: "ménage" },
    { BABYSITTING: "babysitting" }
  ];

  const handleCheckService = (hasChecked, serviceValue) => {
    const service = Object.values(serviceValue) + "";
    const serviceSelected = `set${service}ServiceSelected`;

    setServiceSelected(service);
    return serviceSelected;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!serviceSelected) {
      return setIsError(true);
    }
    const service = serviceSelected.toLowerCase();
    history.push(`/${service}-service`);
  };

  return (
    <>
      {isUserNotLoadded ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div className="welcome">
            <p>
              Ravi de vous voir, <br />
              <span>{user.username}</span>
            </p>
          </div>
          <div className="home-page wrapper">
            <div className="home-page--promo">
              <p className="label">
                <span>20% </span>
                <br />
                de remise avec le code <strong>HAPPYFOOD</strong>
                <br />
                sur la cuisine
              </p>
              <img src="../promo-cooking.png" alt="promo cooking" />
            </div>
            <div className="home-page--top-profil">
              <h2 className="home-page--title">
                Les LemonMaids les mieux notés
              </h2>
              <div className="profils">
                {maids.map(
                  (maid, i) =>
                    i < 3 &&
                    !!maid.rating &&
                    !!maid.imageProfil && (
                      <RatedProfil
                        stars={maid.rating}
                        img={maid.imageProfil}
                        name={maid.username}
                        key={i}
                      />
                    )
                )}
              </div>
            </div>

            <div className="home-page--services">
              <h2 className="home-page--title">Choisissez votre service</h2>
              {isError && (
                <div id="mea-error">
                  <p>Veuillez choisir un service</p>
                </div>
              )}
              <form className="form-cooking" onSubmit={handleSubmit}>
                {services.map((service, i) => (
                  <ServiceItem
                    serviceValue={[Object.keys(service)]}
                    serviceName={Object.values(service) + ""}
                    hasChecked={handleCheckService}
                    key={i}
                  />
                ))}
                <div className="alignCenter">
                  <button className="btn-cta" onClick={handleSubmit}>
                    Rechercher
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
