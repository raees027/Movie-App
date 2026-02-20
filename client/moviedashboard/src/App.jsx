import { useState } from "react";
import "./App.css";
import "./Styles/globals.css";
import "./Styles/variables.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { MoviePage } from "./Pages/MoviePage/MoviePage";
import { GenrePage } from "./Pages/GenrePage/GenrePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignupPage } from "./Pages/SignupPage/SignupPage";

function App() {
  return (
    <>
      <Homepage />

      {/* <MoviePage /> */}

      {/* <GenrePage /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
    </>
  );
}

export default App;
