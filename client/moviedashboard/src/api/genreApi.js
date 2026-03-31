import { api, axiosInstance } from "./axiosInstance";

export const getGenreList = () => {
  return api.get("/genres");
};
