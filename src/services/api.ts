import axios from "axios";


function apiClient() {
  const api = axios.create({
    baseURL: "http://havana:3000",
  });
  return api;
}

export const api = apiClient();

