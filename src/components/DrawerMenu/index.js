import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import "./drawermenu.css";

const DrawerMenu = (props) => {
  const { navList } = props;

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className="sidemenu_content">
          <ListItemButton>
            <ListItemIcon>
              <a href="#" onClick={() => setOpenDrawer(false)}>
                BCR
              </a>
            </ListItemIcon>
          </ListItemButton>
          {navList.map((list) => (
            <ListItemButton>
              <ListItemIcon className="sidemenu_list">
                <a
                  href={list.href}
                  open={openDrawer}
                  onClick={() => setOpenDrawer(false)}
                >
                  {list.name}
                </a>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerMenu;
