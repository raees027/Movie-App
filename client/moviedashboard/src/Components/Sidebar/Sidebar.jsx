import Button from "@mui/material/Button";
import { FilterSection } from "../FilterSection/FilterSection";
import { SidebarNavLinks } from "./sidebarNavLinks";

export const Sidebar = ({ showTop, showFilter, showHeader }) => {
  return (
    <>
      <div className="sidebar-container bg-(--sidebar-bgc)  w-60 h-full p-5   rounded-4xl flex flex-col ">
        {showHeader && (
          <div className="side-heading font-sans text-[36px] pt-1 text-(--sidebar-text) font-extrabold">
            Cinemas.
          </div>
        )}

        {showTop && (
          <div className="sidebar-section-top  flex flex-col gap-10">
            <SidebarNavLinks />
          </div>
        )}

        {showFilter && (
          <div className="sidebar-section-bottom h-full flex flex-col mt-10">
            <FilterSection />
          </div>
        )}

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
