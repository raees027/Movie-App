import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { FilterSection } from "../FilterSection/FilterSection";
export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar-container bg-(--sidebar-bgc)  w-60 h-screen p-5  rounded-4xl flex flex-col ">
        <div className="side-heading font-sans text-[36px] pt-5 text-(--sidebar-text) font-extrabold">
          Cinemas.
        </div>
        <div className="sidebar-section-top   mt-40 flex flex-col gap-10 ">
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

        <div className="sidebar-section-bottom h-full flex flex-col mt-10  cursor-pointer">
          <FilterSection />
        </div>

        {/* <div className="sidebar-section-bottom text-(--sidebar-text) hover:text-white mt-auto font-[lato] text-[18px] font-bold cursor-pointer">
          <h2>Logout</h2>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E50914",
            px: 3,
            py: 1,
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#B20710",
              boxShadow: "none",
            },
          }}
        >
          Logout
        </Button> */}
      </div>
    </>
  );
};
