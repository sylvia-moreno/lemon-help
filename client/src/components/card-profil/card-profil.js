import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import maidService from "../../services/maids";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

import "./card-profil.scss";

const CardProfil = props => {
  const [maid, setMaid] = useState({});

  useEffect(() => {
    maidService.getProfil(props.match.params.id).then(response => {});
  }, []);

  
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
              <p className="container-service">{props.maid.profession}</p>
            </div>
            <div className="container">
              <div className="rating">
                Note:
                <span className="rating-number">{props.maid.rating}</span>
                <FontAwesomeIcon icon={faLemon} />
              </div>
            </div>
          </div>
          <div className="block">
            <div className="container-cta">
              {/*<Link
                to={`/profil-maid/${props.maid.id}`}
                className="bta-link--NoBg container-show-profil"
                disabled
              >
                Voir son profil
              </Link>*/}
              <button
                className="bta-link--Bg container-selected"
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
