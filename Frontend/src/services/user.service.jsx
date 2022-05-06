import axios from "axios";

const apiUrl = "http://localhost:4000/";
class UserService {
  saveUser(userDetails) {
    return axios.post(`${apiUrl}user`, userDetails);
  }
}

export default new UserService();
