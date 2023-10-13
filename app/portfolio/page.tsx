import React, { ReactNode } from "react";
import FormationOrExperienceBox from "../components/FormationOrExperienceBox/FormationOrExperienceBox";
import reactLogo from "@/public/reactWithoutText.png";
import nodeJsLogo from "@/public/nodejsLogo.png";
import nextJsLogo from "@/public/nextjsLogo.png";
import { StaticImageData } from "next/image";
import dokinPortfolioImg from "@/public/dokinPortfolioImg.png";
import goodboardPortfolioImg from "@/public/goodboardPortfolioImg.png";
import viciPortfolioImg from "@/public/viciPortfolioImg.png";
import styles from "./page.module.css";

type Props = {};

const page = (props: Props) => {
  const nextJsLogoWithHeight = {
    heightBigScreen: 10,
    heightSmallScreen: 10,
    img: nextJsLogo,
  };

  const reactLogoWithHeight = {
    heightBigScreen: 25,
    heightSmallScreen: 25,
    img: reactLogo,
  };

  const nodeJsLogoWithHeight = {
    heightBigScreen: 25,
    heightSmallScreen: 25,
    img: nodeJsLogo,
  };

  const projects: {
    img: any;
    imgHeight: number;
    title: string;
    description: ReactNode;
    stack?: {
      heightBigScreen: number;
      heightSmallScreen: number;
      img: StaticImageData;
    }[];
    githubOpen: boolean;
    githubLink: string;
    projectLink: string;
    type: "projet";
  }[] = [
    {
      img: dokinPortfolioImg,
      imgHeight: 240,
      title: "Dokin",
      description: (
        <>
          Dokin est une extension à la suite Google Workspace permettant
          d&apos;automatiser les flux financiers des PME, en créant des liens
          entre les documents financiers et des sources de données diverses
          (CRM, réseaux sociaux, base de données...) via différentes API. <br />
          <br />
          Cette application a été réalisée avec un frontend en NextJs, et un
          backend sur Node Js (express). Le runtime de Google, Appscript a
          également été utilisée, nous permettant d&apos;accéder à certaines
          fonctions et listeners indisponibles en dehors de ce dernier.,
        </>
      ),
      stack: [nextJsLogoWithHeight, reactLogoWithHeight, nodeJsLogoWithHeight],
      githubLink: "",
      githubOpen: false,
      projectLink: "https://dokin.co",
      type: "projet",
    },
    {
      img: goodboardPortfolioImg,
      imgHeight: 240,
      title: "Goodboard",
      description: (
        <>
          Goodboard est une application permettant à tout concepteur de logiciel
          de savoir ce que leurs utilisateurs souhaitent comme fonctionnalités.
          <br />
          <br />
          Ces derniers peuvent proposer des fonctionnalités, mais également
          voter pour des idées déjà proposées. les avis de ses utilisateurs sur
          les fonctionnalités souhaitées. Goodboard permet ensuite au concepteur
          de prendre des décisions grâce à ces données, notamment via des
          connexions API vers les logiciels de gestion, type Trello et Jira.
          <br />
          <br />
          Cette application a été créée en utilisant un backend Node Js
          (express) et un frontend React
        </>
      ),
      stack: [reactLogoWithHeight, nodeJsLogoWithHeight],
      githubOpen: true,
      githubLink: "https://github.com/Ludovicmanga/GoodBoard",
      projectLink: "https://goodboard-app.herokuapp.com/login",
      type: "projet",
    },
    {
      img: viciPortfolioImg,
      imgHeight: 240,
      title: "Vici",
      description: (
        <>
          Vici est une application permettant à tout utilisateur de créer des
          memory cards, afin d&apos;assimiler de l`information par le jeu. Les
          utilisateurs peuvent ainsi créer des cartes avec des questions et des
          réponses, puis tester sa mémoire, via des challenges
        </>
      ),
      stack: [nextJsLogoWithHeight, reactLogoWithHeight, nodeJsLogoWithHeight],
      githubOpen: true,
      githubLink: "https://github.com/Ludovicmanga/vici",
      projectLink: "https://vici-brown.vercel.app/",
      type: "projet",
    },
  ];

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <FormationOrExperienceBox {...project} key={project.title} />
      ))}
    </div>
  );
};

export default page;
