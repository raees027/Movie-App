import { useContext, useEffect, useRef } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { ApiContext } from "../../Context/ApiContext";
import axios from "axios";
import { SearchListContext } from "../../Context/SearchListContext";
import { genericError } from "../../utils/genericError";
import { useMovies } from "../../hooks/useMovies";
import { useUsers } from "../../hooks/useUsers";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const ProfilePage = () => {
  const { setMovieList, searchInputValue } = useContext(SearchListContext);
  const { USERS_API_BASE_URL, MOVIE_API_BASE_URL } = useContext(ApiContext);

  const { fetchMovies, movieList } = useMovies();
  const { fetchProfile, abortController } = useUsers();

  // const fetchMovieList = async () => {
  //   try {
  //     const response = await axios(`${MOVIE_API_BASE_URL}/moviesWithGenre`, {
  //       params: {
  //         query: searchInputValue,
  //       },
  //     });

  //     setMovieList(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchProfile();

    return () => {
      abortController.current.abort();
    };
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(searchInputValue);
    }, 250);

    return () => clearTimeout(delay);
  }, [searchInputValue]);

  return (
    <div className="home-page-container min-h-screen w-screen pr-5 flex flex-col">
      <PageHeader showWatchList={true} showUserAccessIcon={true} />

      <div className="sidebar-cards flex">
        <div className="side-bar ">
          <Sidebar showHeader={false} showTop={true} showFilter={true} />
        </div>
        <div className="home h-screen w-full pt-2 bg-black text-white flex flex-col items-center">
          <SearchBar />

          <div className="movie-section-in-header max-w-250 flex justify-center items-center">
            <Movies movieList={movieList} />
          </div>
        </div>
      </div>
    </div>
  );
};
