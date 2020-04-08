import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/maids`,
    withCredentials: true
  }),

  signup(email, password) {
    return this.service
      .post("/signup", {
        email,
        password
      })
      .then(response => response.data);
  },

  getMaid() {
    return this.service.get("/").then(response => response.data);
  },

  getSpecificMaid(foodType, foodPreference, /*mealType,*/ serviceType) {
    ;
    return this.service
      .post("/cooking-service", {
        foodType,
        foodPreference,
        //mealType,
        serviceType
      })
      .then(response => response.data);
  },

  //signup maid
  signupMaid(
    email,
    password,
    username,
    address,
    cityName,
    cityCode,
    country,
    imageProfil,
    phoneNumber,
    experience,
    profession,
    speciality,
    foodPractice,
    curriculumvitae,
    rating,
    rate
  ) {
    return this.service
      .post("/signup-maid", {
        email,
        password,
        username,
        address,
        cityName,
        cityCode,
        country,
        imageProfil,
        phoneNumber,
        experience,
        profession,
        speciality,
        foodPractice,
        curriculumvitae,
        rating,
        rate
      })
      .then(response => response.data);
  },

  loggedinMaid() {
    return this.service.get("/loggedin-maid").then(response => response.data);
  },

  login(username, password) {
    return this.service
      .post("/login-maid", { username, password })
      .then(response => response.data);
  },

  //edit maid
  editMaid(
    email,
    password,
    username,
    address,
    cityName,
    cityCode,
    country,
    imageProfil,
    phoneNumber,
    experience,
    profession,
    speciality,
    foodPractice,
    curriculumvitae,
    rating,
    rate
  ) {
    return this.service
      .post("/edit-maid", {
        email,
        password,
        username,
        address,
        cityName,
        cityCode,
        country,
        imageProfil,
        phoneNumber,
        experience,
        profession,
        speciality,
        foodPractice,
        curriculumvitae,
        rating,
        rate
      })
      .then(response => response.data);
  },

  getUrl(url) {
    return this.service
      .get(url)
      .then(response => response.data);
  },

  logout() {
    return this.service.get('/logout', {})
      .then(response => response.data)
  },
  
  /*loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data)
  },

  edit(username, campus, course) {
    return this.service.post('/edit', {
      username,
      campus,
      course
    })
      .then(response => response.data)
  }*/
};
