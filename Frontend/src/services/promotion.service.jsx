import axios from "axios";

const apiUrl = "http://localhost:4000/";
class PromotionService {
  getPromotions(itemList) {
    return axios.put(`${apiUrl}promotion`, itemList);
  }
  getPromotionList() {
    return axios.get(`${apiUrl}promotion`);
  }
}

export default new PromotionService();
