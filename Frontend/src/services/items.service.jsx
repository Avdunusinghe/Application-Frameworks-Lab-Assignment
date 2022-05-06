import axios from "axios";

const apiUrl = "http://localhost:4000/";
class ItemService {
  getAllItems() {
    return axios.get(`${apiUrl}item`);
  }

  saveItem(itemDetails) {
    return axios.post(`${apiUrl}item`, itemDetails);
  }
}

export default new ItemService();
