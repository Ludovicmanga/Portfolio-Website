import ExperiencesAndFormation from "./components/ExperiencesAndFormation/ExperiencesAndFormation";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import MyStack from "./components/MyStack/MyStack";
import MyYoutubeChannel from "./components/MyYoutubeChannel/MyYoutubeChannel";
import WebsiteHero from "./components/WebsiteHero/WebsiteHero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <WebsiteHero />
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>Ma stack</div>
        <div className={styles.sectionContentContainer}>
          <MyStack />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          Mes expériences & ma formation
        </div>
        <div className={styles.sectionContentContainer}>
          <ExperiencesAndFormation />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>Ma chaine Youtube</div>
        <div className={styles.sectionContentContainer}>
          <MyYoutubeChannel />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>Mon portfolio</div>
        <div className={styles.sectionContentContainer}>
          <MyPortfolio />
        </div>
      </div>
    </div>
  );
}
