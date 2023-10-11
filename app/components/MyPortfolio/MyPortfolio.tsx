import React from "react";
import styles from "./MyPortfolio.module.css";
import { Button } from "@mui/material";

type Props = {};

const MyPortfolio = (props: Props) => {
  return (
    <div>
      <div className={styles.btnContainer}>
        <Button variant="contained">Voir mon portfolio</Button>
      </div>
    </div>
  );
};

export default MyPortfolio;
