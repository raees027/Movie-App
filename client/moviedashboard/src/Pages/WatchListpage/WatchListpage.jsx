import { useContext, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { Movies } from "../../Components/Movies/Movies";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { UserAccountMenu } from "../../Components/UserAccountMenu/UserAccountMenu";
import { useMovies } from "../../hooks/useMovies";
import { SearchListContext } from "../../context/SearchListContext";

export const WatchListpage = () => {
  const { fetchWatchListMovies, movieList } = useMovies();
  // const { movieList, searchInputValue } = useContext(SearchListContext);

  useEffect(() => {
    fetchWatchListMovies();
  }, []);

  return (
    <>
      <div className="home-page-container min-h-screen w-screen m-0  pr-5 flex     ">
        {/* <div className="side-bar  ">
          <Sidebar />
        </div> */}
        <div className="home h-screen w-full  pt-2 flex flex-col items-center ">
          <div className="header-section-watchlist h-17 w-full flex justify-end items-center ">
            <UserAccountMenu />
          </div>
          <h1 className="watchlist-haeder text-(--sidebar-text) text-3xl font-light">
            Watch List
          </h1>

          <div className="movie-section-in-header max-w-250 flex  text-white justify-center items-center ">
            <Movies movieList={movieList} />
          </div>
        </div>
      </div>
    </>
  );
};
