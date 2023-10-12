"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import ludoLogo from "@/public/logoLudovic.svg";
import { useMediaQuery } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import NavDrawer from "./NavDrawer/NavDrawer";

type Props = {};

const NavBar = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery('(min-width:40rem)');

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <nav className={styles.container}>
      <NavDrawer isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
      <Link href="/" className={styles.logo}>
        <Image alt="logo-site" src={ludoLogo} />
      </Link>
      {bigScreenMediaQuery ? (
        <NavBarMenu />
      ) : (
        <div onClick={() => handleToggleDrawer()} className={styles.smallScreenMenuContainer}>
          <AiOutlineMenu className={styles.icon} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
