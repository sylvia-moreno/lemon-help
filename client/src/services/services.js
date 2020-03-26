import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/maids`,
    withCredentials: true
  }),

  //get all services
  getServices() {
    return this.service.get('/')
      .then(response => 
        response.data
      )
  },
}  