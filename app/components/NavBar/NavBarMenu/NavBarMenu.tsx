import React from "react";
import styles from "./NavBarMenu.module.css";
import Link from "next/link";

type Props = {};

const NavBarMenu = (props: Props) => {

  return (
    <ul className={styles.menu}>
      <li><Link href='/'>Accueil</Link></li>
      <li><Link href='/experiences'>Mes expériences</Link></li>
      <li><Link href='/portfolio'>Mon Portfolio</Link></li>
    </ul>
  );
};

export default NavBarMenu;
