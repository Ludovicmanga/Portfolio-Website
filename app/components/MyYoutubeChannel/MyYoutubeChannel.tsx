"use client"

import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import styles from "./MyYoutubeChannel.module.css";

type Props = {};

const MyYoutubeChannel = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery('(min-width:40rem)');

  return (
    <div className={styles.container}>
      <div className={styles.iFramesContainer}>
        <iframe
          className={`${styles.iframe} ${styles.firstIframe}`}
          src="https://www.youtube.com/embed/s6S9jzp7PzA?si=Vbb6tsT9UEuFueZQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className={`${styles.iframe} ${styles.otherIframes}`}
          src="https://www.youtube.com/embed/Jxn6fV_ZgWA?si=Mspx7e-XbZhBLwnj"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className={`${styles.iframe} ${styles.otherIframes}`}
          src="https://www.youtube.com/embed/TjvXOHrRNAw?si=Vm7msvXkJM8qf_LB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className={`${styles.iframe} ${styles.otherIframes}`}
          src="https://www.youtube.com/embed/0SZMdxLrlLA?si=44m6Eho1jVDYc98G"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.emoji}>👉</div>
        <Button
          variant="contained"
          href="https://www.youtube.com/@ludovicmanga8241?sub_confirmation=1"
          target="_blank"
          sx={{
            width: bigScreenMediaQuery? "20%": 'auto',
            height: "3rem",
          }}
        >
          S&apos;abonner
        </Button>
        <div className={styles.emoji}>👈</div>
      </div>
    </div>
  );
};

export default MyYoutubeChannel;
