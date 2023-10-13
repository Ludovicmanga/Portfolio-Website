import React from "react";
import styles from "./page.module.css";
import FormationOrExperienceBox from "../components/FormationOrExperienceBox/FormationOrExperienceBox";
import dokinLogo from '@/public/dokinLogo.png'
import goodboardLogo from '@/public/goodBoard.svg'
import openClassRoomsLogo from '@/public/openClassroomsLogo.png'
import iesegLogo from '@/public/iesegLogo.png'
import { StaticImageData } from "next/image";

type Props = {};

const page = (props: Props) => {
  const formationsAndExperiences: {
    img: StaticImageData;
    title: string;
    companyName: string;
    from: string;
    to: string;
    description: string;
    type: "formation" | "expérience";
  }[] = [
    {
      img: dokinLogo,
      title: "CPO & développeur fullstack",
      companyName: "Dokin",
      from: "Mai 2022",
      to: "Mai 2023",
      description:
        "J'ai cofondé Dokin, ai été développeur fullstack et CPO, pendant 1 an. J'ai appliqué la méthode agile, avec ma casquette de CPO, et participé au développement des fonctionnalités, avec mon autre casquette de développeur",
      type: "expérience",
    },
    {
      img: goodboardLogo,
      title: "Développeur fullstack",
      companyName: "Goodboard",
      from: "Mai 2022",
      to: "Aujourd'hui",
      description:
        "J'ai cofondé le projet Goodboard, avec Antoine, qui s'occupe du marketing. Je suis en charge de la partie développement du logiciel, et à tout ce qui touche à la technique",
      type: "expérience",
    },
    {
      img: openClassRoomsLogo,
      title: "Développeur Web / Php symfony",
      companyName: "Openclassrooms",
      from: "Mai 2020",
      to: "Décembre 2021",
      description:
        "J'ai obtenu un diplôme de développeur web (équivalent bac+2 / +3) avec Openclassrooms. 20h de cours par semaine, et une dizaine de projets",
      type: "formation",
    },
    {
      img: iesegLogo,
      title: "Master en management",
      companyName: "Ieseg",
      from: "Juillet 2013",
      to: "Juillet 2018",
      description:
        "J'ai obtenu mon master, dans l'école de commerce postback numéro 1",
      type: "formation",
    },
  ];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.titleContainer}>Expériences</h1>
      {formationsAndExperiences
        .filter((formExp) => formExp.type === "expérience")
        .map((formExp) => (
          <FormationOrExperienceBox {...formExp} key={formExp.companyName} />
        ))}
      <h1 className={styles.titleContainer}>Formations</h1>
      {formationsAndExperiences
        .filter((formExp) => formExp.type === "formation")
        .map((formExp) => (
          <FormationOrExperienceBox {...formExp}  key={formExp.companyName} />
        ))}
    </div>
  );
};

export default page;
