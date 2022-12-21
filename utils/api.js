import Axios from "axios";

const api = new Axios.create({
  baseURL: "https://192.168.0.197:3333"
})

export default api;