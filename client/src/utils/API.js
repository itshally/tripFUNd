import axios from "axios";

export default {
  //saves a user to the database
  createUser: user => {
    return axios.post("api/user", user);
  },
  findUser: user => {
    return axios.get("api/user", user);
  },
  userAuthentication: user => {
    return axios.post("api/user/login", user);
  },
  updateUser: user => {
    return axios.put("api/user", user);
  }
};