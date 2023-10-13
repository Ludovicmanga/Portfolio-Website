"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import styles from "./FormationOrExperienceBox.module.css";
import { Avatar, Button, Tooltip, useMediaQuery } from "@mui/material";
import { AiFillGithub, AiOutlineCloud } from "react-icons/ai";

type Props = {
  img: StaticImageData;
  title: string;
  imgHeight: number;
  companyName?: string;
  from?: string;
  to?: string;
  description: ReactNode;
  type: "formation" | "expérience" | "projet";
  stack?: {
    heightBigScreen: number;
    heightSmallScreen: number;
    img: StaticImageData;
  }[];
  githubOpen?: boolean;
  projectLink?: string;
  githubLink?: string;
};

const FormationOrExperienceBox = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery("(min-width:40rem)");

  const handleAvatarHeight = () => {
    if (props.type === "projet") {
      return bigScreenMediaQuery ? "16rem" : "17rem";
    } else {
      return bigScreenMediaQuery ? "20rem" : "17rem";
    }
  };

  const handleAvatarWidth = () => {
    if (props.type === "projet") {
      return bigScreenMediaQuery ? "30rem" : "23rem";
    } else {
      return bigScreenMediaQuery ? "20rem" : "17rem";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Avatar
            variant="rounded"
            sx={{
              background: "rgba(18, 71, 134, 0.21)",
              height: handleAvatarHeight(),
              width: handleAvatarWidth(),
            }}
          >
            <Image alt="img-logo" height={props.imgHeight} src={props.img} />
          </Avatar>
        </div>
        {props.type === "projet" && (
          <div className={styles.stackContainer}>
            {props.stack?.map((stack) => (
              <Avatar
                key={stack.img.src}
                variant="rounded"
                sx={{
                  background: "white",
                  height: bigScreenMediaQuery ? "4rem" : "4rem",
                  width: bigScreenMediaQuery ? "4rem" : "4rem",
                  margin: "0rem 0.7rem",
                  cursor: "pointer",
                  border: "solid black 0.00001rem",
                }}
              >
                <Image
                  alt="img-logo"
                  height={
                    bigScreenMediaQuery
                      ? stack.heightBigScreen
                      : stack.heightSmallScreen
                  }
                  src={stack.img}
                />
              </Avatar>
            ))}
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        <div
          className={
            props.type === "projet"
              ? `${styles.title} ${styles.titlePortfolio}`
              : `${styles.title} ${styles.titleExperience}`
          }
        >
          {props.title}
        </div>
        {props.type !== "projet" && (
          <div className={styles.detailsContainer}>
            {props.companyName} | {props.from} - {props.to}
          </div>
        )}
        <div className={styles.description}>{props.description}</div>
        {props.type === "projet" && (
          <div className={styles.btnsContainer}>
            <Tooltip title={props.githubOpen ? "" : "Ce repo n'est pas public"}>
              <span className={styles.tooltipSpan}>
                <Button
                  startIcon={<AiFillGithub />}
                  className={styles.btn}
                  variant="contained"
                  href={props.githubLink || ""}
                  target="_blank"
                  disabled={!props.githubOpen}
                >
                  {bigScreenMediaQuery ? "Github du projet" : "Github"}
                </Button>
              </span>
            </Tooltip>
            <Button
              startIcon={<AiOutlineCloud />}
              className={`${styles.btn} ${styles.projectLinkBtn}`}
              variant="contained"
              href={props.projectLink || ""}
              target="_blank"
            >
              Lien vers l&apos;app
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormationOrExperienceBox;
