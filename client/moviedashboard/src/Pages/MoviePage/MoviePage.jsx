import { MoviePageForm } from "../../Components/MoviePageForm/MoviePageForm";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const MoviePage = () => {
  return (
    <div className="form-component h-screen w-screen flex">
      <div className="left_section w-fit shrink-0">
        <Sidebar />
      </div>
      <div className="rigt_section w-[calc(100%-260px)]  flex-1 flex items-center justify-center">
        <div className="movie-page-container">
          <MoviePageForm />
        </div>
      </div>
    </div>
  );
};
