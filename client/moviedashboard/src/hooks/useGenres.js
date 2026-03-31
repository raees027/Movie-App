import { useState } from "react";
import { getGenreList } from "../api/genreApi";

export const useGenres = () => {
  const [genreList, setGenreList] = useState([]);
  const fetchGenreList = async () => {
    try {
      const response = await getGenreList();
      setGenreList(response.data);
    } catch (error) {
      console.log(error?.response?.data?.message || error.message);
    }
  };
  return { fetchGenreList, genreList };
};
