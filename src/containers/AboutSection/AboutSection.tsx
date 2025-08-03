import AboutFeature from "../../components/Aboutfeature/AboutFeature";
import LinkButton from "../../components/LinkButton/LinkButton";
import Tag from "../../components/Tag/Tag";
import styles from "./AboutSection.module.css";
import { LucideBookHeart, LucideLayers } from "lucide-react";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <Tag tagText="PORTFOLIO" />
      <div className={styles.aboutParagraph}>
        <h1 className={styles.heading}>
          Hi, I'm Tomo <span className={styles.innerText}>Software engineer</span>
        </h1>
        <p className={styles.para}>
          I specialise in building accessible, component-driven user interfaces with React, TypeScript, and modern tooling.
        </p>
        <p className={styles.para}>
          Throughout my career, I've contributed to public sector platforms, led frontend development for government licensing applications, and
          maintained a shared component library used across 10+ projects.
        </p>
        <p className={styles.para}>While my focus is frontend, I also work with .NET APIs to support end-to-end feature delivery when needed.</p>
        <p className={styles.para}>
          I enjoy solving real-world UX challenges, collaborating closely with designers, and writing code that makes things simpler — for both users
          and developers.
        </p>
      </div>
      <LinkButton buttonText="See All Projects" linkTo="/projects" buttonType="arrow-right" />
      <div className={styles.aboutFeatures}>
        <AboutFeature
          icon={<LucideLayers size={36} />}
          title="10+ Skills"
          content="Experienced in JavaScript, ReactJS, TypeScript, HTML, CSS/SCSS, .NET (C#), REST APIs, Node.js, NestJS, Java (Spring Boot), PostgreSQL, MySQL, Jest, Vitest, Git, GitHub, GitLab, CI/CD, Docker (basic)"
        />
        <AboutFeature
          icon={<LucideBookHeart size={36} />}
          title="What I Care About"
          content="Code that's clean, clear, and kind — to both users and future developers. I believe in leaving things better than I found them, writing PRs with intent, refactoring when it matters, and documenting decisions so teammates aren't left guessing."
        />
      </div>
    </section>
  );
};

export default AboutSection;
