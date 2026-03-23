import { useContext, useEffect, useRef } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { ApiContext } from "../../Context/ApiContext";
import axios from "axios";
import { SearchListContext } from "../../Context/SearchListContext";
import { genericError } from "../../utils/genericError";

export const ProfilePage = () => {
  const { setMovieList, searchInputValue } = useContext(SearchListContext);
  const { USERS_API_BASE_URL, MOVIE_API_BASE_URL } = useContext(ApiContext);
  const abortController = useRef(new AbortController());

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios(`${USERS_API_BASE_URL}/profile`, {
        headers: {
          Authorization: `${token}`,
        },
        signal: abortController.current.signal,
      });
    } catch (error) {
      genericError(error);
      console.log(error?.response?.data?.message || error.message);
    }
  };

  const fetchMovieList = async () => {
    try {
      const response = await axios(`${MOVIE_API_BASE_URL}/moviesWithGenre`, {
        params: {
          query: searchInputValue,
        },
      });

      setMovieList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();

    return () => {
      abortController.current.abort();
    };
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovieList();
    }, 500);

    return () => clearTimeout(delay);
  }, [searchInputValue]);

  return (
    <div className="home-page-container min-h-screen w-screen pr-5 flex">
      <div className="home h-screen w-full pt-2 bg-black text-white flex flex-col items-center">
        <PageHeader />
        <SearchBar />

        <div className="movie-section-in-header max-w-250 flex justify-center items-center">
          <Movies />
        </div>
      </div>
    </div>
  );
};
