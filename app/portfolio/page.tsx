import React from 'react'
import FormationOrExperienceBox from '../components/FormationOrExperienceBox/FormationOrExperienceBox';
import reactLogo from "@/public/reactWithoutText.png";
import nodeJsLogo from "@/public/nodejsLogo.png";
import nextJsLogo from "@/public/nextjsLogo.png";
import jsLogo from "@/public/javascriptLogo.png";
import htmlLogo from "@/public/htmlLogo.png";
import cssLogo from "@/public/cssLogo.png";
import phpLogo from "@/public/php.png";
import cLogo from "@/public/cLogo.png";
import Image, { StaticImageData } from "next/image";
import { Avatar, Paper, useMediaQuery } from "@mui/material";
import dokinLogo from '@/public/dokinLogo.png'
import goodboardLogo from '@/public/goodBoard.svg'
import styles from './page.module.css'

const stackLogos = [
  reactLogo,
  nodeJsLogo,
  nextJsLogo,
  jsLogo,
  htmlLogo,
  cssLogo,
  phpLogo,
  cLogo,
];

type Props = {}

const page = (props: Props) => {

  const projects: {
    img: any;
    title: string;
    description: string;
    stack: StaticImageData[];
    githubOpen: boolean;
    githubLink: string;
    projectLink: string;
    type: 'projet';
}[] = [{
    img: dokinLogo,
    title: 'Dokin',
    description: "Dokin est une extension à la suite Google Workspace permettant d\'automatiser les flux financiers des PME, en créant des liens entre les documents financiers et des sources de données diverses (CRM, réseaux sociaux, base de données...) via différentes API. Cette application a été réalisée avec un frontend en NextJs, et un backend sur Node Js (express). Le runtime de Google, Appscript a également été utilisée, nous permettant d'accéder à certaines fonctions et listeners indisponibles en dehors de ce dernier.",
    stack: [nextJsLogo, reactLogo, nodeJsLogo],
    githubLink: '',
    githubOpen: false,
    projectLink: 'https://dokin.co',
    type: 'projet'
  },
  {
    img: goodboardLogo,
    title: 'Goodboard',
    description: 'Goodboard est une application permettant à tout concepteur de logiciel de savoir ce que leurs utilisateurs souhaitent comme fonctionnalités. Ces derniers peuvent proposer des fonctionnalités, mais également voter pour des idées déjà proposées. les avis de ses utilisateurs sur les fonctionnalités souhaitées. Goodboard permet ensuite au concepteur de prendre des décisions grâce à ces données, notamment via des connexions API vers les logiciels de gestion, type Trello et Jira. Cette application a été créée en utilisant un backend Node Js (express) et un frontend React',
    stack: [reactLogo, nodeJsLogo],
    githubOpen: true,
    githubLink: 'https://github.com/Ludovicmanga/GoodBoard',
    projectLink: 'https://goodboard-app.herokuapp.com/login',
    type: 'projet'
  },
  {
    img: goodboardLogo,
    title: 'Vici',
    description: 'Vici est une application permettant à tout utilisateur de créer des memory cards, afin d\'assimiler de l`information des sujets, par le jeu. Les utilisateurs peuvent ainsi créer des cartes avec des questions et des réponses, puis tester sa mémoire, via des challenges',
    stack: [nextJsLogo, reactLogo, nodeJsLogo],
    githubOpen: true,
    githubLink: 'https://github.com/Ludovicmanga/vici',
    projectLink: 'https://vici-brown.vercel.app/',
    type: 'projet'
  }];

  return (
    <div className={styles.container}>
      { projects.map(project => (
        <FormationOrExperienceBox {...project} key={project.title} />
      )) }
    </div>
  )
}

export default page