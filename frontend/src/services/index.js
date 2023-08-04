import axios from "axios";

export const api = axios.create({
  baseURL:  "https://contacthub-zx9y.onrender.com/clients",
  timeout: 1000,
});
