/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080";

const getUserBoard = () => {
  return axios.get(API_URL + "/me", { headers: authHeader() });
};


export default {
  getUserBoard
};