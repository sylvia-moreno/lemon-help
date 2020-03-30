import React, { useEffect, useState, useCallBack } from "react";

import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import maidService from "../../../services/maids";

import RadioButtonIcon from "../radio-button-icon/radio-button-icon";
import Counter from "../../counter/counter";
import Accordion from "../../accordion/accordion";

import "./form.scss";

const FormCookingService = ({history, updateMaid, savePreferencesService}) => {
  const [foodPreference, setFoodPreference] = useState("");
  const [numberOfClient, setNumberOfClient] = useState(1);
  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");
  const [maids, setMaids] = useState({});


  const serviceType = "cuisine";

  const handleSubmit = (event) => {
    event.preventDefault();
    
    //je vais rechercher les maids qui correspondent à ma recherche
    maidService.getSpecificMaid(
      foodType,
      foodPreference,
      mealType,
      serviceType,
    )
      .then(data => {
        const preferencesUser = {foodType, foodPreference, mealType, serviceType, numberOfClient};        setMaids(data)
        updateMaid(data);
        savePreferencesService(preferencesUser);
        history.push('/booking');
      })
      .catch(err => err)
    ;
    
    //je vais poster toutes mes info à /maids-proposed
    //qui va me retourner la liste des maids qui correspondent
    
    // il va falloir stocker les renseignements de mon form
    //pour pouvoir les afficher après avoir choisi un maid pour le récap
  }

  const handleChangeFoodPreference = e => {
    const val = e.target.value;
    setFoodPreference(val);
  };

  const handleChangeNumberOfClient = nb => {
    debugger
    setNumberOfClient(nb);
  };

  const handleChangeFoodType = e => {
    const val = e.target.value;
    setFoodType(val);
  };

  const handleChangeMealType = e => {
    const val = e.target.value;
    setMealType(val);
  };


  return (
    <form className="form-service form-cooking" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Pratique alimentaire :</legend>
        <div className="form-cooking--group form-cooking--group-radio-button">
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "végétarien"}
            label="Végétarien"
            value="végétarien"
            name="végétarien"
            icon={faCarrot}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "carnivore"}
            label="Carnivore"
            value="carnivore"
            name="carnivore"
            icon={faDrumstickBite}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "tousAliments"}
            label="De tout"
            value="tousAliments"
            name="tousAliments"
            icon={faUtensils}
          />
        </div>
      </fieldset>

      <Counter
        serviceType={"COOKING"}
        countNumberOfClient={handleChangeNumberOfClient}
      />

      <fieldset>
        <div className="form-cooking--group form-type">
          <legend>Cuisine :</legend>
          <div className="form-type--radio-group">
            <label className="radio-btn">
              <input
                type="radio"
                name="français"
                value="français"
                checked={foodType === "français"}
                onChange={handleChangeFoodType}
              />
              Français
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="indien"
                value="indien"
                checked={foodType === "indien"}
                onChange={handleChangeFoodType}
              />
              Indien
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="américain"
                value="américain"
                checked={foodType === "américain"}
                onChange={handleChangeFoodType}
              />
              Americain - Burger
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="italien"
                value="italien"
                checked={foodType === "italien"}
                onChange={handleChangeFoodType}
              />
              Italien
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="libanais"
                value="libanais"
                checked={foodType === "libanais"}
                onChange={handleChangeFoodType}
              />
              Libanais
              <div className="radio-btn--check"></div>
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-cooking--group form-type">
          <legend>Repas :</legend>
          <div className="form-type--radio-group">
            <label className="radio-btn">
              <input
                type="radio"
                name="petit-déjeuné"
                value="petit-déjeuné"
                checked={mealType === "petit-déjeuné"}
                onChange={handleChangeMealType}
              />
              Petit déjeuné
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="déjeuné"
                value="déjeuné"
                checked={mealType === "déjeuné"}
                onChange={handleChangeMealType}
              />
              Déjeuné
              <div className="radio-btn--check"></div>
            </label>
            <label className="radio-btn">
              <input
                type="radio"
                name="goûter"
                value="goûter"
                checked={mealType === "goûter"}
                onChange={handleChangeMealType}
              />
              Goûter
              <div className="radio-btn--check"></div>
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="diner"
                value="diner"
                checked={mealType === "diner"}
                onChange={handleChangeMealType}
              />
              Dîner
              <div className="radio-btn--check"></div>
            </label>
          </div>
        </div>
      </fieldset>

      <button className="btn-cta" onClick={handleSubmit}>Rechercher</button>
    </form>
  );
};

export default FormCookingService;
