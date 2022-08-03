import React from "react";
import "../../App.css";
import "./navbarstyle.css";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import DrawerMenu from "../DrawerMenu";

const Navbar = (props) => {
  const { navList } = props;

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar elevation={0}>
        <Toolbar className="header">
          {isMatch ? (
            <div className="navbar_mini">
              <div className="logo"></div>
              <DrawerMenu {...props} />
            </div>
          ) : (
            <div className="header_content">
              <div className="logo"></div>
              <div className="navbar_list">
                {navList.map((list) => (
                  <a href={list.href}>{list.name} </a>
                ))}
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
