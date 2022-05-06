import axios from "axios";

const apiUrl = "http://localhost:4000/";
class OrderService {
  buyItems(itemList) {
    return axios.put(`${apiUrl}order`, itemList);
  }
}

export default new OrderService();
