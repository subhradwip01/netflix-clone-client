import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhose:8080",
});

