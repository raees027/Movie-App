import { useContext, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { Movies } from "../../Components/Movies/Movies";
// import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useMovies } from "../../hooks/useMovies";
import { SearchListContext } from "../../context/SearchListContext";

export const Homepage = () => {
  const { fetchMovies, movieList } = useMovies();
  const { searchInputValue } = useContext(SearchListContext);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(searchInputValue);
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [searchInputValue]);

  return (
    <>
      <div className="home-page-container min-h-screen w-screen m-0  pr-5 flex     ">
        <div className="side-bar  ">
          <Sidebar showHeader={true} showTop={false} showFilter={true} />
        </div>
        <div className="home h-screen w-full m-0 pt-2 bg-black text-white flex flex-col items-center ">
          <Header />
          <div className="movie-section-in-header max-w-250 flex justify-center items-center ">
            <Movies movieList={movieList} />
          </div>
        </div>
      </div>
    </>
  );
};
