/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "login", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard
};