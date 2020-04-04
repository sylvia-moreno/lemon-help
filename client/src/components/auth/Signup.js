import React from "react";

import { Link } from "react-router-dom";

import authService from "./auth-service.js";
import IconHeaderMaids from "../icons/icon-header-maids";

import './auth.scss';

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    address: "",
    cityName: "",
    cityCode: "",
    country: "",
    //gender: "",

    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    // 1. Signup
    authService
      .signup(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.address,
        this.state.cityName,
        this.state.cityCode,
        this.state.country
      )
      .then(() => {
        this.setState({ error: "" });

        // 2. then, update with user infos
        authService
          .edit(
            this.state.username,
            this.state.password,
            this.state.email,
            this.state.address,
            this.state.cityName,
            this.state.cityCode,
            this.state.country
            //this.state.gender,
          )
          .then(response => {
            debugger;
            this.setState({ error: "" });

            this.props.updateUser(response);
            this.props.history.push("/");
          })
          .catch(err => this.setState({ error: err.response.data.message }));
      })
      .catch(err => this.setState({ error: err.response.data.message }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="signup" onSubmit={this.handleSubmit}>
        <div className="login-logo">
          <h1 className="logo">LemonMaid</h1>
          <div className="icons">
            <span className="icons-item"><IconHeaderMaids /></span>
          </div>
          <p className="label">
            La recette d'une vie plus facile
          </p>
        </div>
        <div className="login-form">
          {this.state.error && (
            <div className="mea-error">
              <p>{this.state.error}</p>
            </div>
          )}

          <h2>Identification</h2>
          <p>
            <label>
              <input
                type="text"
                name="username"
                className="input is-success"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Nom d'utilisateur"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
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

          <p>
            <label>
              <input
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Adresse"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="cityName"
                name="cityName"
                value={this.state.cityName}
                onChange={this.handleChange}
                placeholder="Ville"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="cityCode"
                name="cityCode"
                value={this.state.cityCode}
                onChange={this.handleChange}
                placeholder="Code Postale"
              />
            </label>
          </p>

          <p>
            <label>
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              >
                <option value="France">France</option>
              </select>
            </label>
          </p>

          <button className="btn-cta" onClick={this.handleSubmit}>
            Créer un compte
          </button>
          <div className="bta-link--NoBg">
          <Link to="/login">Vous avez déjà un compte ? Connectez-vous</Link>
          </div>
        </div>
      </form>
    );
  }
}
