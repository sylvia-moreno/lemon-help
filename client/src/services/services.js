import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/maids`,
    withCredentials: true
  }),

  bookingCookingService() {
    debugger
    return this.service
      .post("/booking-confirmation", {

      })
      .then(response => response.data);
  }
};
