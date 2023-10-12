import { Button } from "@mui/material";
import React from "react";
import styles from "./ExperiencesAndFormation.module.css";
import Image from "next/image";
import illustration from "@/public/profilPic.jpg";
import popup from "@/public/popup.svg";

type Props = {};

const ExperiencesAndFormation = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={popup} alt="experiences-pic" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textDetails}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          fugit amet dolore consequatur quisquam ea nesciunt provident ipsam
          minus temporibus. Totam sunt asperiores aspernatur sapiente alias
          tenetur voluptas explicabo magnam.
        </div>
        <div className={styles.btnContainer}>
          <Button variant="contained">Voir mes expériences</Button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesAndFormation;
