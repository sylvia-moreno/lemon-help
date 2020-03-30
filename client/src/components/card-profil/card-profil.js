import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

import maidService from "../../services/maids";

import "./card-profil.scss";

const CardProfil = (props) => {
  debugger;
  const handleSubmit = event => {
    event.preventDefault();
    props.selectedMaid(props.maid);
    props.history.push("/booking-confirmation");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="card-profil">
        <div className="card-profil--img">
          <span className="card-profil--img-container">
            <img src={props.maid.imageProfil} alt="img profil" />
          </span>
        </div>
        <div className="card-profil--info">
          <div className="block">
            <div className="container">
              <p className="container-name">{props.maid.username}</p>
              {/*} <p className="container-service">
                {props.maid.services.map((service, i) => (
                  <span className="container-service" key={i}>
                    {service}{" "}
                  </span>
                ))}
                </p>*/}
              <p className="container-service">{props.maid.profession}</p>
            </div>
            <div className="container">
              <div className="rating">
                <span className="rating-number">{props.maid.rating}</span>
                <FontAwesomeIcon icon={faLemon} />
              </div>
            </div>
          </div>
          <div className="block">
            <div className="container-cta">
              <a
                href={`/maids-profil/${props.maid._id}`}
                className="btn-cta container-show-profil"
              >
                Voir son profil
              </a>
              <button
                className="btn-cta container-selected"
                onClick={handleSubmit}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CardProfil;
