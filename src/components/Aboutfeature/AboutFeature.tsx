import styles from "./AboutFeature.module.css";
import { TfiAlarmClock } from "react-icons/tfi";
import { TbStack2 } from "react-icons/tb";
import { AboutFeatureProps } from "../../types";

const AboutFeature = ({ icon, title, content }: AboutFeatureProps) => {
  return (
    <section className={styles.aboutFeature}>
      <div className={styles.iconBarWrapper}>
        {icon}
        <span className={styles.bar}></span>
      </div>
      <div className={styles.aboutFeatureContent}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.para}>{content}</p>
      </div>
    </section>
  );
};

export default AboutFeature;
