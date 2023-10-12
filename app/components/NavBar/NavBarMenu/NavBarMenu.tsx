import React from "react";
import styles from "./NavBarMenu.module.css";

type Props = {};

const NavBarMenu = (props: Props) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={styles.menu}>
      <li onClick={() => scrollToSection("my-stack")}>Ma stack</li>
      <li onClick={() => scrollToSection("my-experiences")}>Mes expériences</li>
      <li onClick={() => scrollToSection("youtube")}>Youtube</li>
      <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
    </ul>
  );
};

export default NavBarMenu;
