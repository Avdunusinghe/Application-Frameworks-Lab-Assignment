import axios from "axios";

const apiUrl = "http://localhost:4000/";
class ItemService {
  getAllItems() {
    return axios.get(`${apiUrl}item`);
  }
}

export default new ItemService();
