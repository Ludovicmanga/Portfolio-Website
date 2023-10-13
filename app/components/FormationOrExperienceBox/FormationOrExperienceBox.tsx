"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./FormationOrExperienceBox.module.css";
import { Avatar, Button, useMediaQuery } from "@mui/material";
import { AiFillGithub, AiOutlineCloud } from "react-icons/ai";

type Props = {
  img: StaticImageData;
  title: string;
  companyName?: string;
  from?: string;
  to?: string;
  description: string;
  type: "formation" | "expérience" | "projet";
  stack?: StaticImageData[];
  githubOpen?: boolean;
  projectLink?: string;
  githubLink?: string;
};

const FormationOrExperienceBox = (props: Props) => {
  const bigScreenMediaQuery = useMediaQuery("(min-width:40rem)");

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imgContainer}>
          <Avatar
            variant="rounded"
            sx={{
              background: "rgba(18, 71, 134, 0.21)",
              height: bigScreenMediaQuery ? "20rem" : "17rem",
              width: bigScreenMediaQuery ? "20rem" : "17rem",
            }}
          >
            <Image alt="img-logo" height={60} src={props.img} />
          </Avatar>
        </div>
        {props.type === "projet" && (
          <div className={styles.stackContainer}>
            {props.stack?.map((stack) => (
              <Avatar
                key={stack.src}
                variant="rounded"
                sx={{
                  height: bigScreenMediaQuery ? "4rem" : "4rem",
                  width: bigScreenMediaQuery ? "4rem" : "4rem",
                  margin: "0rem 0.7rem",
                  cursor: "pointer",
                }}
              >
                <Image alt="img-logo" height={11} src={stack} />
              </Avatar>
            ))}
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{props.title}</div>
        {props.type !== "projet" && (
          <div className={styles.detailsContainer}>
            {props.companyName} | {props.from} - {props.to}
          </div>
        )}
        <div className={styles.description}>{props.description}</div>
        {props.type === "projet" && (
          <div className={styles.btnsContainer}>
            <Button
              startIcon={<AiFillGithub />}
              className={styles.btn}
              variant="contained"
              href={props.githubLink || ""}
              target="_blank"
              disabled={!props.githubOpen}
            >
              { bigScreenMediaQuery ? 'Github du projet' : 'Github' }
            </Button>
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
