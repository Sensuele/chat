/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "http://localhost:8080";

const register = (username, email, password) => {
  return axios.post(API_URL + `/user`, {
    username,
    email,
    password
  })
};

const login = (username, password) => {
  return axios.post(API_URL + `/login`, {
    username,
    password
  }).then((response) => {
    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};