import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/maids`,
    withCredentials: true
  }),

  signup(email, password) {
    return this.service.post('/signup', {
      email,
      password
    })
      .then(response => response.data)
  },

  getMaid() {
    return this.service.get('/')
      .then(response => 
        response.data
      )
  },

  /*getSpecificMaid(
    foodPreference, 
    numberOfClient,
    foodType,
    mealType
    ) {
    return this.service.post('/cooking-service', {
      foodPreference, 
      numberOfClient,
      foodType,
      mealType
    })
    .then(response => response.data)
  },*/

  /*loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data)
  },

  logout() {
    return this.service.get('/logout', {})
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