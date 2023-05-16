import axios from "axios";
import { UserContext } from "../hooks/UserContext";
import { useContext } from 'react'

const {user} = useContext(UserContext)


function apiClient() {
  const api = axios.create({
    baseURL: "http://rodes:3002",
    headers: {
      "Authorization" : `Bearer ${user.token}`
    }
  });
  return api;
}

export const api = apiClient();

