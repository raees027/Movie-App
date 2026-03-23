import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const USERS_API_BASE_URL = "http://localhost:3007/api/users";
  const MOVIE_API_BASE_URL = "http://localhost:3007/api/movies";
  const GENRE_API_BASE_URL = "http://localhost:3007/api/genres";

  return (
    <ApiContext.Provider
      value={{ USERS_API_BASE_URL, MOVIE_API_BASE_URL, GENRE_API_BASE_URL }}
    >
      {children}
    </ApiContext.Provider>
  );
};
