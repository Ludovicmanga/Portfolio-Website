import BasicBloc from "./components/BasicBloc/BasicBloc";
import MyStack from "./components/MyStack/MyStack";
import MyYoutubeChannel from "./components/MyYoutubeChannel/MyYoutubeChannel";
import WebsiteHero from "./components/WebsiteHero/WebsiteHero";
import styles from "./page.module.css";
import portfolioImg from "@/public/codingImg.svg";
import experiencesImg from "@/public/popup.svg";

export default function Home() {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <WebsiteHero />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle} id="my-stack">
          Les langages que je maîtrise
        </div>
        <div className={styles.sectionContentContainer}>
          <MyStack />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle} id="my-experiences">
          Mes expériences & ma formation
        </div>
        <div className={styles.sectionContentContainer}>
          <BasicBloc
            descriptionText="De formation commerciale, je me suis reconverti en 2020 dans le
            développement web, notamment grâce à une formation certifiante
            Openclassrooms. Depuis, j'ai cofondé une startup, dans laquelle j'ai
            été développeur fullstack."
            btnText="Voir mes expériences"
            btnDestination='/experiences'
            img={experiencesImg}
            type="experience"
          />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle} id="youtube">
          Ma chaîne Youtube
        </div>
        <div className={styles.sectionContentContainer}>
          <MyYoutubeChannel />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle} id="portfolio">
          Mon portfolio
        </div>
        <div className={styles.sectionContentContainer}>
          <BasicBloc
            descriptionText="Parce que c'est en forgeant qu'on devient forgeron, pratiquer est
          essentiel. C'est pourquoi, je code en permanence, et réalise des
          projets qui me tiennent à coeur, que ce soit dans le cadre
          professionnel ou personnel. Que ce soit seul, ou en groupe."
            btnText="Voir mon portfolio"
            btnDestination='/portfolio'
            img={portfolioImg}
            type="portfolio"
          />
        </div>
      </div>
    </div>
  );
}
