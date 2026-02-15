import { Header } from "../../Components/Header/Header";
import { Movies } from "../../Components/Movies/Movies";
// import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const Homepage = () => {
  return (
    <>
      <div className="home-page-container min-h-screen w-screen m-0 py-3  pr-5 flex     ">
        <div className="side-bar ml-1 ">
          <Sidebar />
        </div>
        <div className="home h-screen w-full m-0 pt-2 bg-black text-white flex flex-col items-center ">
          <Header />
          <div className="movie-section-in-header max-w-250 flex justify-center items-center ">
            <Movies />
          </div>
        </div>
      </div>
    </>
  );
};
