import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import maidService from "../../services/maids";
import RatedProfil from "../rated-profil/rated-profil";
import ServiceItem from "../services-list/service-item";

import Popin from "../Popin.js";

import "../../styles/home.scss";
import "./auth.scss";

const Homepage = ({ user, history }) => {
  const [maids, setMaids] = useState([]);
  const [cookingServiceSelected, setCOOKINGServiceSelected] = useState();
  const [serviceSelected, setServiceSelected] = useState();
  const [displayCookingForm, setDisplayCookingForm] = useState(false);

  useEffect(() => {
    maidService
      .getMaid()
      .then(data => setMaids(data))
      .catch(err => setMaids({}));
  }, []);

  const services = [
    { COOKING: "cuisiner" },
    { CLEANING: "aide ménagère" },
    { BABYSITTING: "babysitting" }
  ];

  const handleCheckService = (hasChecked, serviceValue) => {
    debugger
    const service = Object.values(serviceValue) + "";
    const serviceSelected = `set${service}ServiceSelected`;

    setServiceSelected(service);
    return serviceSelected;
  };

  const handleSubmit = (event) => {
    debugger
    event.preventDefault();
    const service = serviceSelected.toLowerCase();
    history.push(`/${service}-service`);
  }

  return (
    <>
      {!user._id ? (
        <Redirect to="/landing-page" />
      ) : (
        <div className="home-page">
          <div className="home-page--top-profil">
            <h2 className="home-page--title">Les LemonMaids les mieux notés</h2>
            <div className="profils">
              {maids.map(
                (maid, i) =>
                  i < 5 &&
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
            <form className="form-cooking" onSubmit={handleSubmit}>
              {services.map(service => (
                <ServiceItem
                  serviceValue={[Object.keys(service)]}
                  serviceName={Object.values(service) + ""}
                  hasChecked={handleCheckService}
                />
              ))}
              <button className="btn" onClick={handleSubmit}>Rechercher</button>
            </form>

            {/*
            //pour le choix du service et le formulaire qui suit
            // si je ne trouve pas de solution 
            // je vais créer 3 forms en fonction du service choisi => render le bon
            // dans le formulaire je met tous les champs qu'il me faut avec le bon service et son model correspondant (cooking, baby ou cleaning)
            // puis je soumet le form puis post et je rempli la BDD du user avec le service et les options qu'il a choisi >> {services} .populate()
            */}
          </div>
        </div>

        /*
          {props.user._id ? (
            <Redirect to="/landing-page" /> 
          ) : (
          <div className="app-home">
            <div className="app-home--wrapper">
              <div className="app-home--illustration">
                <img src="../illustration 19.png" alt="image home" />
              </div>
              <h1 className="app-home--logo">
                <span className="logo-part-1">Lemon</span>
                <span className="logo-part-2">Maid</span>
              </h1>
              <div className="app-home--cta">
                <Link className="btn-cta" to="/signup">Sign up</Link>
                <Link className="btn-cta" to="/login">Log in</Link>
              </div>
            </div>
          </div>
          )}
        </>
        */
      )}
    </>
  );
};

export default Homepage;
