import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/user`,
    withCredentials: true
  }),


  getProfil(userID) {
    return this.service
      .get(`/profil/${userID}`)
      .then(response => response.data);
  }
};
