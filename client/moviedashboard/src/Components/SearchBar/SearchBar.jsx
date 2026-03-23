import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { SearchListContext } from "../../Context/SearchListContext";
export const SearchBar = () => {
  const { searchInputValue, handleChange, clearSearch } =
    useContext(SearchListContext);
  return (
    <>
      <div className="search-container w-100 relative ">
        <input
          type="text"
          placeholder="search here"
          value={searchInputValue}
          onChange={handleChange}
          className="py-3.5 w-full rounded-3xl text-gray-300 text-[16px] bg-(--sidebar-bgc) outline-0  px-4 pr-10 text-grey-400"
        />
        <SearchOutlinedIcon
          className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          text-gray-500
          pointer-events-none
        "
        />
        {/* <div className="search-icon"></div> */}
      </div>
    </>
  );
};
