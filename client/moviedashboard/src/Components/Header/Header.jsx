import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router";
import { UserAccountMenu } from "../UserAccountMenu/UserAccountMenu";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container w-full  py-2 mx-3  flex justify-between items-center">
        <div className="header-container-left-portion w-full mr-2 ml-10 flex justify-between items-center">
          {/* Search Bar */}
          <SearchBar />
        </div>

        <div className="header-container-right-portion w-fit py-2.5 ml-2 bg-(--sidebar-bgc) rounded-2xl flex justify-evenly items-center gap-1 pr-1  ">
          <div className="login-signup-section text-[16px] text-(--sidebar-text) font-semibold px-2 ml-1 flex gap-2">
            <h2
              className="cursor-pointer"
              onClick={() => {
                navigate("/loginPage");
              }}
            >
              Login
            </h2>
            <h2
              className="cursor-pointer"
              onClick={() => {
                navigate("/signupPage");
              }}
            >
              Signup
            </h2>
          </div>

          <div
            className="watch-later-text font-medium text-(--sidebar-text) cursor-pointer"
            onClick={() => {
              navigate("/watchList");
            }}
          >
            <Tooltip title="Watchlater" arrow>
              <WatchLaterIcon fontSize="medium" />
            </Tooltip>
          </div>
          <div className="user-account-menu-section">
            <UserAccountMenu />
          </div>
        </div>
      </div>
    </>
  );
};
