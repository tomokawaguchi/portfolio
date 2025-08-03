import AboutSection from "../AboutSection/AboutSection";
import FeaturedProjectsSection from "../FeaturedProjectsSection/FeaturedProjectsSection";
import styles from "./HomeMain.module.css";

const HomeMain = () => {
  return (
    <main id="main" className={styles.main}>
      <div className={styles.mainInner}>
        <AboutSection />
        <FeaturedProjectsSection />
      </div>
    </main>
  );
};

export default HomeMain;
