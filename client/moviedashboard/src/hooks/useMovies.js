import { useContext, useState } from "react";
import { getMovies, getFilteredMovies } from "../api/movieApi";
import { getWatchLaterMovies } from "../api/userApi";

import { SearchListContext } from "../context/SearchListContext";

export const useMovies = () => {
  const { movieList, setMovieList } = useContext(SearchListContext);
  //   const [movieList, setMovieList] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const res = await getMovies({ query });
      setMovieList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFilteredMovies = async (filter, selectedRatings) => {
    try {
      const params = {};
      if (filter && filter != "all") {
        params.genre = filter;
      }
      if (selectedRatings.length > 0) {
        params.ratings = selectedRatings.join(",");
      }
      const res = await getFilteredMovies(params);
      setMovieList(res.data);
      console.log("filtered array", res.data);
    } catch (err) {
      console.log(err?.respons?.data?.message || err.message);
    }
  };

  const fetchWatchListMovies = async () => {
    try {
      const response = await getWatchLaterMovies();
      setMovieList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchMovies, movieList, fetchWatchListMovies, fetchFilteredMovies };
};
