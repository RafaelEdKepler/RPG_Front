import Axios from "axios";

const api = new Axios.create({
  baseURL: "https://localhost:3333"
})

export default api;