import axios from "axios";
import { response } from "express";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3007/api",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/loginPage";
    }
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = token;
    }
    return request;
  },
  (error) => {
    error;
  },
);
