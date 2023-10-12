"use client"

import React, { useState } from "react";
import styles from "./BasicBloc.module.css";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LoadingButton } from '@mui/lab';

type Props = {
  img: string;
  descriptionText: string;
  btnText: string;
  btnDestination: string;
  type: "experience" | "portfolio";
};

const BasicBloc = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    setIsLoading(true);
    router.push(props.btnDestination);
    setIsLoading(false);
  };
  return (
    <div className={styles.container}>
      <Paper className={styles.imgContainer} elevation={6}>
        <Image
          className={
            props.type === "experience"
              ? `${styles.img} ${styles.experiencesImg}`
              : `${styles.img} ${styles.portfolioImg}`
          }
          src={props.img}
          alt="context-pic"
        />
      </Paper>
      <div className={styles.textContainer}>
        <div className={styles.textDetails}>{props.descriptionText}</div>
        <div className={styles.btnContainer}>
          <LoadingButton
          loadingIndicator="Chargement…"
          loading={isLoading}
          onClick={handleClick}
            sx={{
              height: "3rem",
            }}
            variant="contained"
          >
            {props.btnText}
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default BasicBloc;
