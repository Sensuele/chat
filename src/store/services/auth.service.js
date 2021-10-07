/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "";

const register = (username, email, password) => {
  return axios.post(`/post`, {
    username,
    email,
    password
  })
};

export default {
  register
};