import React from "react";
import styles from "./BasicBloc.module.css";
import { Avatar, Button, Paper } from "@mui/material";
import Image from "next/image";
import { BsLightbulb } from "react-icons/bs";

type Props = {
  img: string;
  descriptionText: string;
  btnText: string;
  type: 'experience' | 'portfolio'
};

const BasicBloc = (props: Props) => {
  return (
    <div className={styles.container}>
      <Paper className={styles.imgContainer} elevation={6}>
        <Image className={props.type === 'experience' ? `${styles.img} ${styles.experiencesImg}` : `${styles.img} ${styles.portfolioImg}`} src={props.img} alt="context-pic" />
      </Paper>
      <div className={styles.textContainer}>
        <div className={styles.textDetails}>{props.descriptionText}</div>
        <div className={styles.btnContainer}>
          <Button sx={{
            height: '3rem'
          }} variant="contained">{props.btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default BasicBloc;
