import React, { useState } from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { fr } from "date-fns/locale";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import IconVegan from "../../icons/icon-vegan";
import IconMeat from "../../icons/icon-meat";
import IconAllFood from "../../icons/icon-allfood";

import maidService from "../../../services/maids";

import RadioButtonIcon from "../radio-button-icon/radio-button-icon";
import Counter from "../../counter/counter";

import "./form.scss";

const FormCookingService = ({ history, updateMaid, selectedService }) => {
  const [foodPreference, setFoodPreference] = useState("");
  const [numberOfClient, setNumberOfClient] = useState(1);
  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");
  const [maids, setMaids] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [locale, setLocale] = useState("fr");

  const serviceType = "cuisine";

  const handleSubmit = event => {
    event.preventDefault();

    //je vais rechercher les maids qui correspondent à ma recherche
    maidService
      .getSpecificMaid(foodType, foodPreference, mealType, serviceType)
      .then(data => {
        const preferencesUser = {
          foodType,
          foodPreference,
          mealType,
          serviceType,
          numberOfClient,
          selectedDate
        };
        setMaids(data);
        updateMaid(data);
        selectedService(preferencesUser);
        history.push("/booking");
      })
      .catch(err => err);
  };

  const handleChangeFoodPreference = e => {
    const val = e.target.value;
    setFoodPreference(val);
  };

  const handleChangeNumberOfClient = nb => {
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

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <form className="form-service form-cooking wrapper" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Régime alimentaire :</legend>
        <div className="form-cooking--group form-cooking--group-radio-button">
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "végétarien"}
            label="Végétarien"
            value="végétarien"
            name="végétarien"
            icon={<IconVegan />}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "carnivore"}
            label="Carnivore"
            value="carnivore"
            name="carnivore"
            icon={<IconMeat />}
          />
          <RadioButtonIcon
            onChange={handleChangeFoodPreference}
            isSelected={foodPreference === "tousAliments"}
            label="De tout"
            value="tousAliments"
            name="tousAliments"
            icon={<IconAllFood />}
          />
        </div>
      </fieldset>

      <Counter
        serviceType={"COOKING"}
        countNumberOfClient={handleChangeNumberOfClient}
      />

      <fieldset>
        <div className="form-cooking--group form-type">
          <legend>Catégorie :</legend>
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

      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
        <div className="form-cooking--group">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date :"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </div>

        <div className="form-cooking--group">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Horaire :"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
            locale={fr}
          />
        </div>
      </MuiPickersUtilsProvider>

      <button className="btn-cta" onClick={handleSubmit}>
        Rechercher
      </button>
    </form>
  );
};

export default FormCookingService;
