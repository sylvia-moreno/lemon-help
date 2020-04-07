import axios from "axios";

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/upload-file`,
    withCredentials: true
  }),

  //maid signup 
  handleUploadFile(theFile) {
    
    return this.service
      .post("/upload", theFile)
      .then(res => res.data)
      .catch(err => err);
  },
};
