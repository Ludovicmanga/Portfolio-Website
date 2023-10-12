"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./FormationOrExperienceBox.module.css";
import { Avatar, useMediaQuery } from "@mui/material";

type Props = {
  img: StaticImageData;
  imgHeight: number;
  title: string;
  companyName: string;
  from: string;
  to: string;
  description: string;
  type: "formation" | "expérience";
};

const FormationOrExperienceBox = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery("(min-width:40rem)");

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Avatar
          variant="rounded"
          sx={{
            background: "rgba(18, 71, 134, 0.21)",
            height: bigScreenMediaQuery ? "20rem" : "17rem",
            width: bigScreenMediaQuery ? "20rem" : "17rem",
          }}
        >
          <Image alt="img-logo" height={props.imgHeight} src={props.img} />
        </Avatar>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.detailsContainer}>
          {props.companyName} | {props.from} - {props.to}
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

export default FormationOrExperienceBox;
