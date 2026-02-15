import { useState } from "react";
import "./App.css";
import "./Styles/globals.css";
import "./Styles/variables.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { MoviePage } from "./Pages/MoviePage/MoviePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Homepage /> */}

      <MoviePage />
    </>
  );
}

export default App;
