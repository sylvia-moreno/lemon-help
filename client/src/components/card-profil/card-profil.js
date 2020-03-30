import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./card-profil.scss";

const CardProfil = props => {
  debugger;
  return (
    <>
      <div className="card-profil">
        <div className="card-profil--img">
          <span className="card-profil--img-container">
            <img src={props.imageProfil} alt="img profil" />
          </span>
        </div>
        <div className="card-profil--info">
          <div className="container">
            <p className="container-name">{props.username}</p>
            <p className="container-service">{props.services}</p>
            <div className="container-cta">
              <a
                href={`/profil/${props._id}`}
                className="btn-cta container-show-profil"
              >
                Voir son profil
              </a>
              {!!props.service ? (
                  <div className="btn-cta container-selected">Réserver</div>
              ) : ''}
            </div>
            <a
              href={`/profil/${props._id}`}
              className="btn-cta container-show-profil"
            >
              Voir son profil
            </a>
          </div>
          <div className="container">
            <div className="rating">
              <span className="rating-number">{props.rating}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
      {!!props.services ? <div className="card-profil--cooking"></div> : null}
    </>
  );
};

export default CardProfil;
