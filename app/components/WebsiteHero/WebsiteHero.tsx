import React from 'react'
import Image from "next/image";
import profilePic from "@/public/profilPic.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import styles from "./WebsiteHero.module.css";

type Props = {}

const WebsiteHero = (props: Props) => {
  return (
    <>
        <div className={styles.myName}>Ludovic Manga</div>
        <div className={styles.myJob}>Développeur fullstack Javascript</div>
        <div className={styles.profilPicContainer}>
          <Image
            className={styles.profilPic}
            alt="photo-ludo"
            src={profilePic}
          ></Image>
        </div>
        <p className={styles.myDescription}>
          Bonjour, comme vous avez déjà pu le remarquer je m’appelle Antoine
          Moulard. J’ai conçu ce site pour me présenter et exposer les projets
          que j’ai pu réaliser. Ce site sera l’occasion pour moi de développer
          des articles sur plusieurs thématiques qui pourront peut être vous
          intéresser.
        </p>
        <div className={styles.linksContainer}>
          <AiFillGithub className={styles.socialNetworkicon} />
          <AiFillLinkedin className={styles.socialNetworkicon} />
          <AiFillYoutube className={styles.socialNetworkicon} />
        </div>
      </>
  )
}

export default WebsiteHero