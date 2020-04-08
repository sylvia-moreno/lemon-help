import React from "react";

import { Link } from "react-router-dom";

import IconHeaderMaids from "../icons/icon-header-maids";
import authService from "./auth-service.js";

import './auth.scss';

export default class extends React.Component {
  state = {
    username: "",
    password: "",

    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    authService
      .login(this.state.username, this.state.password)
      .then(response => {
        this.setState({ error: "" });

        this.props.updateUser(response);
        this.props.history.push("/");
      })
      .catch(err => this.setState({ error: err.response.data.message }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <div className="login-logo">
          <h1 className="logo">LemonMaid</h1>
          <div className="icons">
            <span className="icons-item">
              <IconHeaderMaids />
            </span>
          </div>
          <p className="label">La recette d'une vie plus facile</p>
        </div>
        <div className="login-form">
          {this.state.error && (
            <div id="mea-error">
              <p>{this.state.error}</p>
            </div>
          )}
          <h2>Identification</h2>
          <p>
            <label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Nom d'utilisateur"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Mot de passe"
              />
            </label>
          </p>
          <button className="btn-cta" onClick={this.handleSubmit}>
            SE CONNECTER
          </button>
          <div className="bta-link--NoBg">
          <Link to="/signup">Vous n'avez pas de compte ? Inscrivez-vous</Link>
          </div>

          <div className="cta-link">
            <Link to="/signup-maid">Vous souhaitez travailler avec nous ? Inscrivez-vous</Link>
          </div>
        </div>
      </form>
    );
  }
}
