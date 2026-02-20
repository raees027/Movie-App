import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="header-container w-full  py-1 mx-3  flex justify-between items-center">
        <div className="header-container-left-portion w-full   mx-2 flex justify-center items-center">
          {/* Search Bar */}
          <SearchBar />
        </div>

        <div className="header-container-right-portion w-fit py-2.5 bg-(--sidebar-bgc) rounded-2xl flex justify-evenly items-center gap-1 pr-1  ">
          <div className="login-signup-section text-[16px] text-(--sidebar-text) font-semibold px-2 ml-1 flex gap-2">
            <h2 className="cursor-pointer">Login</h2>
            <h2 className="cursor-pointer">Signup</h2>
          </div>

          <div className="watch-later-text font-medium text-(--sidebar-text) ">
            <Tooltip title="Watchlater" arrow>
              <WatchLaterIcon fontSize="medium" />
            </Tooltip>
          </div>
          <div className="user-account-menu-section">
            {/* User Account Menu */}
            <Box className=" flex items-center justify-center">
              <Tooltip title="Account settings" arrow>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ p: 0.5 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    alt="Semy Sharp"
                    src="movieswallpaper.jpg"
                    sx={{
                      width: 24,
                      height: 24,
                      fontSize: 12,
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      minWidth: 180,
                      bgcolor: "var(--sidebar-bgc)",
                      color: "#e5e7eb", // gray-200
                      borderRadius: "12px",
                      mt: 2,
                      overflow: "visible",
                      filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.45))",

                      "& .MuiMenuItem-root": {
                        fontSize: "0.85rem",
                        gap: 1,
                        py: 0.75,
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.08)",
                        },
                      },

                      "& .MuiListItemIcon-root": {
                        minWidth: 32,
                        color: "#9ca3af",
                      },

                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 16,
                        width: 8,
                        height: 8,
                        bgcolor: "var(--sidebar-bgc)",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
              >
                <MenuItem>
                  <Avatar
                    src="movieswallpaper.jpg"
                    sx={{ width: 22, height: 22 }}
                  />
                  Profile
                </MenuItem>

                <MenuItem>
                  <Avatar
                    src="movieswallpaper.jpg"
                    sx={{ width: 22, height: 22 }}
                  />
                  My account
                </MenuItem>

                <Divider sx={{ bgcolor: "rgba(255,255,255,0.08)" }} />

                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>

                <MenuItem sx={{ color: "#f87171" }}>
                  <ListItemIcon sx={{ color: "#f87171" }}>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
