import axios from "axios";



function apiClient() {
  const api = axios.create({
    baseURL: "http://rodes:3002",
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
  });
  return api;
}

export const api = apiClient();

