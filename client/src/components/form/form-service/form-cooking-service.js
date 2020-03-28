import React, { useEffect, useState } from "react";

import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import RadioButtonIcon from "../radio-button-icon/radio-button-icon";
import Counter from "../../counter/counter"

import "./form.scss";

const FormCookingService = () => {
  const [foodPreference, setFoodPreference] = useState("");
  const [numberOfClient, setNumberOfClient] = useState("");
  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");

  /*const handleSubmit = (event) => {
    event.preventDefault();
    
    //je vais rechercher les helpers qui correspondent à ma recherche
    /*maidService.getSpecificMaid()
    .then(data => setMaids(data))
    .catch(err => setMaids({}))
    ;
    
    //je vais poster toutes mes info à /maids-proposed
    qui va me retourner la liste des maids qui correspondent
    
    // il va falloir stocker les renseignements de mon form
    pour pouvoir les afficher après avoir choisi un maid pour le récap
  }*/

  const handleChangeFoodPreference = e => {
    const val = e.target.value;
    setFoodPreference(val);
  };

  const handleChangeNumberOfClient = e => {
    const val = e.target.value;
    setNumberOfClient(val);
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
    <form className="form-cooking">
      <fieldset>
        <legend>Pratique alimentaire :</legend>
        <div className="form-cooking--group form-cooking--group-radio-button">
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "vegan"}
            label="Végétarien"
            value="vegan"
            name="vegan"
            icon={faCarrot}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "notVegan"}
            label="Carnivore"
            value="notVegan"
            name="notVegan"
            icon={faDrumstickBite}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "anyFood"}
            label="De tout"
            value="anyFood"
            name="anyFood"
            icon={faUtensils}
          />
        </div>
      </fieldset>


      <Counter serviceType={"COOKING"} />

      <div className="form-cooking--group">
        <label>
          Combien serez-vous pour le repas ?
          <input
            type="number"
            name="numberOfClient"
            min="1"
            max="10"
            value={numberOfClient}
            onChange={handleChangeNumberOfClient}
          />
        </label>
      </div>

      <div className="form-cooking--group">
        <fieldset>
          <legend>Cuisine :</legend>

          <label className="radio">
            <input
              type="radio"
              name="frenchFood"
              value="frenchFood"
              checked={foodType === "frenchFood"}
              onChange={handleChangeFoodType}
            />
            Français
          </label>

          <label className="radio">
            <input
              type="radio"
              name="indianFood"
              value="indianFood"
              checked={foodType === "indianFood"}
              onChange={handleChangeFoodType}
            />
            Indien
          </label>

          <label className="radio">
            <input
              type="radio"
              name="americanFood"
              value="americanFood"
              checked={foodType === "americanFood"}
              onChange={handleChangeFoodType}
            />
            Americain - Burger
          </label>

          <label className="radio">
            <input
              type="radio"
              name="italianFood"
              value="italianFood"
              checked={foodType === "italianFood"}
              onChange={handleChangeFoodType}
            />
            Italien
          </label>

          <label className="radio">
            <input
              type="radio"
              name="libaneaseFood"
              value="libaneaseFood"
              checked={foodType === "libaneaseFood"}
              onChange={handleChangeFoodType}
            />
            Libanais
          </label>
        </fieldset>
      </div>

      <div className="form-cooking--group">
        <fieldset>
          <legend>Repas :</legend>

          <label className="radio">
            <input
              type="radio"
              name="breakfast"
              value="breakfast"
              checked={mealType === "breakfast"}
              onChange={handleChangeMealType}
            />
            Petit déjeuné
          </label>

          <label className="radio">
            <input
              type="radio"
              name="lunch"
              value="lunch"
              checked={mealType === "lunch"}
              onChange={handleChangeMealType}
            />
            Déjeuné
          </label>
          <label className="radio">
            <input
              type="radio"
              name="snack"
              value="snack"
              checked={mealType === "snack"}
              onChange={handleChangeMealType}
            />
            Goûter
          </label>

          <label className="radio">
            <input
              type="radio"
              name="diner"
              value="diner"
              checked={mealType === "diner"}
              onChange={handleChangeMealType}
            />
            Dîner
          </label>
        </fieldset>
      </div>
      <button className="btn-cta">Rechercher</button>
    </form>
  );
};

export default FormCookingService;
