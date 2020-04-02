import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/booking`,
    withCredentials: true
  }),

  bookingCookingService(
    foodType,
    foodPreference,
    mealType,
    serviceType,
    numberOfClient,
    selectedDate,
    selectedMaid,
    userID,
    status,
  ) {
    debugger;
    return this.service
      .post("/booking-confirmation", {
        foodType,
        foodPreference,
        mealType,
        serviceType,
        numberOfClient,
        selectedDate,
        selectedMaid,
        userID,
        status,
      })
      .then(response => response.data);
  }
};
