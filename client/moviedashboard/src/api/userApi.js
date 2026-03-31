import { useRef } from "react";
import { axiosInstance } from "./axiosInstance";

export const getWatchLaterMovies = () => axiosInstance.get("/users/watchList");
export const getUserProfile = (signal) => {
  axiosInstance.get("/users/profile", signal);
};
