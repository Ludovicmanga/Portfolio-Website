"use client"

import React from "react";
import styles from "./MyStack.module.css";
import reactLogo from "@/public/reactWithoutText.png";
import nodeJsLogo from "@/public/nodejsLogo.png";
import nextJsLogo from "@/public/nextjsLogo.png";
import jsLogo from "@/public/javascriptLogo.png";
import htmlLogo from "@/public/htmlLogo.png";
import cssLogo from "@/public/cssLogo.png";
import phpLogo from "@/public/php.png";
import cLogo from "@/public/cLogo.png";
import Image from "next/image";
import { Avatar, Paper, useMediaQuery } from "@mui/material";

type Props = {};

export const stackLogos = [
  reactLogo,
  nodeJsLogo,
  nextJsLogo,
  jsLogo,
  htmlLogo,
  cssLogo,
  phpLogo,
  cLogo,
];

const MyStack = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery('(min-width:40rem)');

  return (
    <Paper elevation={4} className={styles.container}>
      <div className={styles.logosSectionContainer}>
        {stackLogos.map((logo) => (
          <Avatar
            variant="rounded"
            key={logo.src}
            className={logo === cssLogo || logo === cLogo ? `${ styles.stackLogo} ${styles.cssOrCStackLogo}` :  `${ styles.stackLogo} ${styles.lambdaStackLogo}`}
            sx={{
              background: "white",
              height: bigScreenMediaQuery ? '7rem': '3rem',
              width: bigScreenMediaQuery ? '7rem': '3rem'
            }}
          >
            <Image alt="language-logo" src={logo} />
          </Avatar>
        ))}
      </div>
    </Paper>
  );
};

export default MyStack;
