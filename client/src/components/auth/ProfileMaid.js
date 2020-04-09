import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

import maidService from "../../services/maids";
import "../card-profil/card-profil.scss";

import { set } from "date-fns/esm";

const ProfileMaid = props => {
  const [maid, setMaid] = useState({});

  useEffect(() => {
    maidService.getProfil(props.match.params.id).then(response => {});
  }, []);

  useEffect(() => {
    props.currentPageName("Profile LemonMaider");
  }, []);

  useEffect(() => {
    const getMaid = id => {
      return props.maids.find(maid => maid._id === id);
    };
    const maid = getMaid(props.match.params.id);

    setMaid(maid);
  });

  return (
    <div className="profile wrapper">
      <h2 className="profile-title">Le profil de {maid.username}</h2>
      <div className="card-profil">
        <div className="card-profil--img">
          <span className="card-profil--img-container">
            <img src={maid.imageProfil} alt="img profil" />
          </span>
        </div>
        <div className="card-profil--info">
          <div className="block">
            <div className="container">
              <p className="container-service">{maid.profession}</p>
            </div>
            <div className="container">
              <ul className="desc">
                {!!maid.profession && (
                  <li>
                    <span className="label">Profession</span>
                    <span className="def">{maid.profession}</span>
                  </li>
                )}
                {!!maid.experience && (
                  <li>
                    <span className="label">Expérience</span>
                    <span className="def">{maid.experience}</span>
                  </li>
                )}
                {!!maid.rating && (
                  <li className="rating">
                    <span className="label">Rating</span>
                    <span className="def">
                      <div className="rating">
                        <span className="rating-number">{maid.rating}</span>
                        <FontAwesomeIcon icon={faLemon} />
                      </div>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMaid;
{
  /* 
export default class extends React.Component {
  

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/signup" />
        ) : (
          <>
            <div className="profile wrapper">
              <div className="profile-card">
                {!!this.props.user.imageprofile && (
                  <div className="profile-card--img">
                    <img
                      src={this.props.user.imageprofile}
                      alt="photo utilisateur"
                    />
                  </div>
                )}
                <div className="profile-card--info">
                  <p>{this.props.user.username}</p>
                </div>
                <div className="profile-card--cta">
                  <div className="profile-card--cta-btn">
                    <Link to="/edit-profile">Editer</Link>
                  </div>
                </div>
              </div>

              <h1>profilee</h1>

              <p>
                <em>Username</em>
                <span>{this.props.user.username}</span>
              </p>
              <p>
                <em>Campus</em>
                <span>{this.props.user.campus}</span>
              </p>
              <p>
                <em>Course</em>
                <span>{this.props.user.course}</span>
              </p>

              <div className="cta">
                <button className="btn logout" onClick={this.logout}>
                  Logout
                </button>
              </div>

              <img
                className="avatar"
                src="https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
              />

              <p>
                <small>
                  The user is able to upload a new profilee photo, using NodeJS
                  and Multer uploader.
                </small>
              </p>
            </div>
          </>
        )}
      </>
    );
  }
}
*/
}
