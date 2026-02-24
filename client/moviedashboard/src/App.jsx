import { useState } from "react";
import "./App.css";
import "./Styles/globals.css";
import "./Styles/variables.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { MoviePage } from "./Pages/MoviePage/MoviePage";
import { GenrePage } from "./Pages/GenrePage/GenrePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignupPage } from "./Pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router";
import { WatchListpage } from "./Pages/WatchListpage/WatchListpage";
import { ForgetPasswordPage } from "./Pages/ForgetPasswordPage/ForgetPasswordPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/forgetpasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/watchList" element={<WatchListpage />} />
      </Routes>
    </>
  );
}

export default App;
