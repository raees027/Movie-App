import { useNavigate } from "react-router";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import Tooltip from "@mui/material/Tooltip";
import { UserAccountMenu } from "../UserAccountMenu/UserAccountMenu";

export const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container h-15 w-full  flex justify-between">
        <div className="header-left-section">
          <div
            className="side-heading font-sans text-[36px]  px-2 text-(--sidebar-text) font-extrabold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Cinemas.
          </div>
        </div>

        <div className="header-right-section flex justify-center items-center pr-1">
          <div
            className="watch-later-text font-medium text-(--sidebar-text) cursor-pointer pr-1.5"
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
