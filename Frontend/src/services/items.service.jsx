import axios from "axios";

const apiUrl = "http://localhost:4000/";
class ItemService {
  getAllItems() {
    return axios.get(`${apiUrl}item`);
  }

  saveItem(itemDetails) {
    return axios.post(`${apiUrl}item`, itemDetails);
  }
  getItemById(id) {
    return axios.get(`${apiUrl}item/${id}`);
  }
  updateItem(itemDetails) {
    return axios.put(`${apiUrl}item`, itemDetails);
  }
}

export default new ItemService();
