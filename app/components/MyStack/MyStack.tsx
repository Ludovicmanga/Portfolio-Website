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

type Props = {};

const MyStack = (props: Props) => {
  const logos = [
    reactLogo,
    nodeJsLogo,
    nextJsLogo,
    jsLogo,
    htmlLogo,
    cssLogo,
    phpLogo,
    cLogo,
  ];
  return (
    <div className={styles.container}>
      <div className={styles.logosSectionContainer}>
        {logos.map((logo) => (
          <Image
            key={logo.src}
            alt="js-logo"
            src={logo}
            className={styles.stackLogo}
          />
        ))}
      </div>
    </div>
  );
};

export default MyStack;
