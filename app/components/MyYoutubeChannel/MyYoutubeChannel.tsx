import React from "react";
import { Button } from "@mui/material";
import styles from './MyYoutubeChannel.module.css';

type Props = {};

const MyYoutubeChannel = (props: Props) => {
  return (
    <div>
      <div className={styles.btnContainer}>
        <Button variant="contained">
          <a
            target="_blank"
            href="https://www.youtube.com/@ludovicmanga8241?sub_confirmation=1"
          >
            S&apos;abonner
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MyYoutubeChannel;
