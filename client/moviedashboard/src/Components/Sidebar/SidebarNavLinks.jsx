import { useNavigate } from "react-router";
import { FilterSection } from "../FilterSection/FilterSection";

export const SidebarNavLinks = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar-section-top mt-15 flex flex-col gap-10 ">
        <div
          className="sidebar-items font-[lato] text-[18px] font-bold cursor-pointer text-white hover:text-(--sidebar-text)   "
          onClick={() => {
            navigate("/");
          }}
        >
          <h2>Home</h2>
        </div>
        <div
          className="sidebar-items font-[lato] text-[18px] font-bold cursor-pointer text-white hover:text-(--sidebar-text)"
          onClick={() => {
            navigate("/movies");
          }}
        >
          <h2>Movie</h2>
        </div>
        <div
          className="sidebar-items font-[lato] text-[18px] font-bold cursor-pointer text-white hover:text-(--sidebar-text)"
          onClick={() => {
            navigate("/genre");
          }}
        >
          <h2>Genre</h2>
        </div>
      </div>
    </>
  );
};
