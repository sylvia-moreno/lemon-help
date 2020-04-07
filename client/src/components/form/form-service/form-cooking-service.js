import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { isEmpty } from "lodash";
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
import CapsuleButtonIcon from "../../capsule-button/capsule-button";
import Counter from "../../counter/counter";

import "./form.scss";

const FormCookingService = ({ history, updateMaid, selectedService, user, currentPageName }) => {
  const [foodPreference, setFoodPreference] = useState("végétarien");
  const [numberOfClient, setNumberOfClient] = useState(1);
  const [foodType, setFoodType] = useState("français");
  const [mealType, setMealType] = useState("déjeuné");
  const [maids, setMaids] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [locale, setLocale] = useState("fr");
  const [isUserNotLoadded, setIsUserNotLoadded] = useState(false);

  useEffect(() => {
    if (isEmpty(user)) {
      setIsUserNotLoadded(true);
    }
  });

  useEffect(() => {
    currentPageName("Cuisine");
  }, []);

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
    <>
      {isUserNotLoadded ? (
        <Redirect to="/login" />
      ) : (
        <>
          <form
            className="form-service form-cooking wrapper"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend>Régime alimentaire </legend>
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
                <legend>Catégorie </legend>
                <div className="form-type--radio-group categorie">
                  <CapsuleButtonIcon
                    name="français"
                    value="français"
                    label="Français"
                    checked={foodType === "français"}
                    onChange={handleChangeFoodType}
                  />

                  <CapsuleButtonIcon
                    name="indien"
                    value="indien"
                    label="Indien"
                    checked={foodType === "indien"}
                    onChange={handleChangeFoodType}
                  />

                  <CapsuleButtonIcon
                    name="américain"
                    value="américain"
                    label="Americain - Burger"
                    checked={foodType === "américain"}
                    onChange={handleChangeFoodType}
                  />

                  <CapsuleButtonIcon
                    name="italien"
                    value="italien"
                    label="Italien"
                    checked={foodType === "italien"}
                    onChange={handleChangeFoodType}
                  />

                  <CapsuleButtonIcon
                    name="libanais"
                    value="libanais"
                    label="Libanais"
                    checked={foodType === "libanais"}
                    onChange={handleChangeFoodType}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div className="form-cooking--group form-type">
                <legend>Repas </legend>
                <div className="form-type--radio-group repas">
                  <CapsuleButtonIcon
                    name="petit-déjeuné"
                    value="petit-déjeuné"
                    label="Petit-déjeuné"
                    checked={mealType === "petit-déjeuné"}
                    onChange={handleChangeMealType}
                  />
                  <CapsuleButtonIcon
                    name="déjeuné"
                    value="déjeuné"
                    label="Déjeuné"
                    checked={mealType === "déjeuné"}
                    onChange={handleChangeMealType}
                  />

                  <CapsuleButtonIcon
                    name="goûter"
                    value="goûter"
                    label="Goûter"
                    checked={mealType === "goûter"}
                    onChange={handleChangeMealType}
                  />

                  <CapsuleButtonIcon
                    name="diner"
                    value="diner"
                    label="Dîner"
                    checked={mealType === "diner"}
                    onChange={handleChangeMealType}
                  />
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
                  label="Date "
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
                  label="Horaire "
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                  locale={fr}
                />
              </div>
            </MuiPickersUtilsProvider>

            <div className="alignCenter">
              <button className="btn-cta" onClick={handleSubmit}>
                Rechercher
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default FormCookingService;
