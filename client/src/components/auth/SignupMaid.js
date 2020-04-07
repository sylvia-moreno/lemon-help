import React from "react";
import { Link } from "react-router-dom";

import maidService from "../../services/maids";

import uploadFileService from "../../services/upload-file";
import IconHeaderMaids from "../icons/icon-header-maids";

import "./auth.scss";

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    address: "",
    cityName: "",
    cityCode: "",
    country: "France",
    imageProfil: "",
    phoneNumber: "",
    experience: "",
    profession: "",
    speciality: "",
    foodPractice: "",
    curriculumvitae: "",
    rating: "",
    rate: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    // 1. Signup
    maidService
      .signupMaid(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.address,
        this.state.cityName,
        this.state.cityCode,
        this.state.country,
        this.state.imageProfil,
        this.state.phoneNumber,
        this.state.experience,
        this.state.profession,
        this.state.speciality,
        this.state.foodPractice,
        this.state.curriculumvitae,
        this.state.rating,
        this.state.rate
      )
      .then(response => {
        this.setState({ error: "" });

        this.props.updateMaid(response);
        this.props.history.push("/");

        // 2. then, update with maid infos
        /*maidService
          .editMaid(
            this.state.username,
            this.state.password,
            this.state.email,
            this.state.address,
            this.state.cityName,
            this.state.cityCode,
            this.state.country,
            this.state.imageProfil,
            this.state.phoneNumber,
            this.state.experience,
            this.state.profession,
            this.state.speciality,
            this.state.foodPractice,
            this.state.curriculumvitae,
            this.state.rating,
            this.state.rate,
          )
          .then(response => {
            ;
            this.setState({ error: "" });

            this.props.updateMaid(response);
            this.props.history.push("/");
          })
          .catch(err => this.setState({ error: err.response.data.message }));
          */
      })
      .catch(err => this.setState({ error: err.response.data.message }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = event => {
    const uploadData = new FormData();
    uploadData.append("imageProfil", event.target.files[0]);
    ;
    uploadFileService
      .handleUploadFile(uploadData)
      .then(response => {
        ;
        //this.props.updateMaid(response);
        this.setState({ imageProfil: response.secure_url });
        //this.props.history.push("/profile");
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <form className="signup-maid" onSubmit={this.handleSubmit}>
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
            <div className="mea-error">
              <p>{this.state.error}</p>
            </div>
          )}

          <h2>Identification LemonMaider</h2>
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

          <p>
            <label>
              <input
                type="tel"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                placeholder="Numéro de téléphone"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="file"
                onChange={this.handleFileChange}
                placeholder="Votre photo de profil"
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="text"
                name="experience"
                value={this.state.experience}
                onChange={this.handleChange}
                placeholder="Combien d'année d'expérience avez-vous ? "
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="text"
                name="rate"
                value={this.state.rate}
                onChange={this.handleChange}
                placeholder="Quel est votre tarif horaire ? "
              />
            </label>
          </p>

          <p>
            <label>
              <input
                type="text"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
                placeholder="Quel est votre numbre de point ? "
              />
            </label>
          </p>

          <p>
            <label>
              <select
                name="profession"
                value={this.state.profession}
                onChange={this.handleChange}
              >
                <option value="">Quel est votre corps de métier ?</option>
                <option value="cuisine">Cuisine</option>
                <option value="ménage">Entretien de la maison</option>
                <option value="babysitter">Babysitting</option>
              </select>
            </label>
          </p>

          <p>
            <label>
              <select
                name="speciality"
                value={this.state.speciality}
                onChange={this.handleChange}
              >
                <option value="">
                  Quelle est votre spécialité culinaire ?
                </option>
                <option value="français">Français</option>
                <option value="italien">Italien</option>
                <option value="américain">Americain - Burger</option>
                <option value="indien">Indien</option>
                <option value="libanais">Libanais</option>
              </select>
            </label>
          </p>

          <p>
            <label>
              <select
                name="foodPractice"
                value={this.state.foodPractice}
                onChange={this.handleChange}
              >
                <option value="">Quel type de cuisine faites-vous ?</option>
                <option value="végétarien">Végétarien</option>
                <option value="carnivore">Carnivore</option>
                <option value="tousAliments">De tout</option>
              </select>
            </label>
          </p>

          <p>
            <label>
              <textarea
                type="text"
                name="curriculumvitae"
                value={this.state.curriculumvitae}
                onChange={this.handleChange}
                placeholder="Dites nous en plus sur votre expérience ..."
              />
            </label>
          </p>

          <button className="btn-cta" onClick={this.handleSubmit}>
            Créer un compte
          </button>
          <div className="bta-link--NoBg">
            <Link to="/login-maid">
              Vous avez déjà un compte ? Connectez-vous
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
