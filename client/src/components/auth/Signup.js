import React from 'react';

import {Link} from 'react-router-dom';

import Popin from '../Popin.js';
import authService from './auth-service.js';

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    cityName: "",
    cityCode: "",
    country: "",
    gender: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(this.state.username, this.state.password)
      .then(() => {
        this.setState({error: ""});

        // 2. then, update with user infos
        authService.edit(this.state.username, this.state.campus, this.state.course)
          .then(response => {
            this.setState({error: ""});
            
            this.props.updateUser(response);
            this.props.history.push('/');
          })
          .catch(err => this.setState({error: err.response.data.message}))
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
      <div>
          <h1>Tu n'as pas encore de compte ?</h1>
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <div className="field">
              <label className="name">Nom d'utilisateur</label>
              <div className="control has-icons-left has-icons-right">
                <input type="text" name="username" className="input is-success" value={this.state.username} onChange={this.handleChange} />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>

            <p>
              <label>
                <em>Email</em>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Mot de passe</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Adresse</em>
                <input type="address" name="address" value={this.state.address} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Ville</em>
                <input type="cityName" name="cityName" value={this.state.cityName} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Code Postale</em>
                <input type="cityCode" name="cityCode" value={this.state.cityCode} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Pays</em>
                <select name="country" value={this.state.country} onChange={this.handleChange}>
                  <option value="France">France</option>
                </select>
              </label>
            </p>

            <p>
              <label>
                <em>Sexe</em>
                <select name="sexe" value={this.state.sexe} onChange={this.handleChange}>
                  <option value="Femme">Femme</option>
                  <option value="Homme">Homme</option>
                </select>
              </label>
            </p>

          </form>

          <p>
            <small>If you already have an account, you can login from <Link to="/login">here</Link></small>
          </p>

      
          <p>
            <strong>Hello!!</strong>
            Welcome to IronProfile!
          </p>
          
          <p>
            <small>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</small>
            <button className="btn" onClick={this.handleSubmit}>Create the account</button>
          </p>
        </div>
    );
  }
}