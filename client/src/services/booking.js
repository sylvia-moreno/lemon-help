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
    methodPaymentSelected
  ) {
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
        methodPaymentSelected
      })
      .then(response => response.data);
  },

  getBookingList(userData) {
    return this.service
      .get("/booking-list", {
        userData
      })
      .then(response => response.data);
  }
};
