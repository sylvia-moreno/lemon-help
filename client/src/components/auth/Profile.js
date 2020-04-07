import React from "react";

import { Link } from "react-router-dom";

import Popin from "../Popin.js";
import authService from "./auth-service.js";
import { Redirect } from "react-router-dom";

export default class extends React.Component {
  logout = event => {
    authService.logout().then(response => {
      this.props.updateUser(false);
    });
  };

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/" />
        ) : (
          <>
            <div className="profil">
              <div className="profil-card">
                {!!this.props.user.imageProfil && (
                  <div className="profil-card--img">
                    <img
                      src={this.props.user.imageProfil}
                      alt="photo utilisateur"
                    />
                  </div>
                )}
                <div className="profil-card--info">
                  <p>{this.props.user.username}</p>
                </div>
                <div className="profil-card--cta">
                  <div className="profil-card--cta-btn">
                    <Link to="/edit-profil">Editer</Link>
                  </div>
                </div>
              </div>

              <h1>Profile</h1>

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
                  The user is able to upload a new profile photo, using NodeJS
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
