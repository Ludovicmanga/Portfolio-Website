import React from "react";
import { Drawer, useMediaQuery } from "@mui/material";
import styles from "./NavDrawer.module.css";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavDrawer = (props: Props) => {

  return (
    <Drawer
      anchor="right"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      PaperProps={{
        sx: { width:"65%" },
      }}
    >
      <nav className={styles.container}>
        <NavBarMenu />
      </nav>
    </Drawer>
  );
};

export default NavDrawer;
