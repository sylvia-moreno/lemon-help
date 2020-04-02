// components/auth/auth-service.js

import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
    withCredentials: true
  }),

  login(username, password) {
    debugger;
    return this.service
      .post("/login", { username, password })
      .then(response => response.data);
  },

  signup(email, password, username, address, cityName, cityCode, country) {
    return this.service
      .post("/signup", {
        email,
        password,
        username,
        address,
        cityName,
        cityCode,
        country
      })
      .then(response => response.data);
  },

  loggedin() {
    return this.service.get("/loggedin").then(response => response.data);
  },

  logout() {
    return this.service.get("/logout", {}).then(response => response.data);
  },

  edit(email, password, username, address, cityName, cityCode, country) {
    return this.service
      .post("/edit", {
        email,
        password,
        username,
        address,
        cityName,
        cityCode,
        country
      })
      .then(response => response.data);
  }
};
