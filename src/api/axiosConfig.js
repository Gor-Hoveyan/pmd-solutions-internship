import axios from "axios";

const api = axios.create({
  baseURL: "https://zangak.pmdsolutions.org",
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default api;
