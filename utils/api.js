import Axios from "axios";

const api = new Axios.create({
  baseURL: "http://localhost:3333"
})

export default api;