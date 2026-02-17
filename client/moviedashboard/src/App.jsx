import { useState } from "react";
import "./App.css";
import "./Styles/globals.css";
import "./Styles/variables.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { MoviePage } from "./Pages/MoviePage/MoviePage";
import { GenrePage } from "./Pages/GenrePage/GenrePage";

function App() {
  return (
    <>
      {/* <Homepage /> */}

      {/* <MoviePage /> */}

      <GenrePage />
    </>
  );
}

export default App;
