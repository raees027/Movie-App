import { api } from "./axiosInstance";

export const getMovies = (params) =>
  api.get("/movies/moviesWithGenre", { params });

export const getFilteredMovies = (params) =>
  api.get("/movies/filter", { params });
