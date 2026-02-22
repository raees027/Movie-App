import { GenrePageForm } from "../../Components/GenrePageForm/GenrePageForm";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const GenrePage = () => {
  return (
    <div className="genre-form-component h-screen w-screen flex  ">
      <div className="left_section w-fit shrink-0">
        <Sidebar />
      </div>
      <div className="rigt_section w-[calc(100%-260px)]  flex-1 flex items-center justify-center">
        <div className="movie-page-container">
          <GenrePageForm />
        </div>
      </div>
    </div>
  );
};
