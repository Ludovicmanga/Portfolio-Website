import React from "react";
import Image from "next/image";
import profilePic from "@/public/profilPic.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import styles from "./WebsiteHero.module.css";

type Props = {};

const WebsiteHero = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profilPicContainer}>
          <Image
            className={styles.profilPic}
            alt="photo-ludo"
            src={profilePic}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.myName}>
            <span className={styles.myNameText}>Ludovic Manga</span>{" "}
            <span className={styles.myNameEmoji}>💻</span>
          </div>
          <div className={styles.myJob}>Développeur fullstack Javascript</div>
          <p className={styles.myDescription}>
            Bonjour, et enchanté ! 😁
            <br />
            Je m’appelle Ludovic Manga, et suis passionné par les technologies
            et le développement web en particulier. Je suis ravi de vous
            présenter ce site, que j'ai créé pour me présenter et exposer les
            projets que j’ai realisé. J'ajouterai ici tout ce qui touche au
            contenu que je pourrais produire, que ce soit des articles, des
            vidéos ou encore des projets.
          </p>
          <div className={styles.linksContainer}>
            <a target="_blank" href="https://github.com/Ludovicmanga/">
              <AiFillGithub className={styles.socialNetworkicon} />
            </a>
            <a target="_blank" href="https://linkedin.com/in/ludovic-manga-jocky">
              <AiFillLinkedin
                color="#0e76a8"
                className={styles.socialNetworkicon}
              />
            </a>
            <a target="_blank" href="https://www.youtube.com/@ludovicmanga8241">
              <AiFillYoutube
                color="#FF0000"
                className={styles.socialNetworkicon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHero;
