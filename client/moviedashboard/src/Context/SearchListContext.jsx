import { createContext, useState } from "react";

export const SearchListContext = createContext();

export const SearchListProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };
  console.log(searchInputValue, "===searchinputvalue");

  const clearSearch = () => {
    setSearchInputValue("");
  };
  return (
    <SearchListContext.Provider
      value={{
        movieList,
        setMovieList,
        searchInputValue,
        handleChange,
        clearSearch,
      }}
    >
      {children}
    </SearchListContext.Provider>
  );
};
