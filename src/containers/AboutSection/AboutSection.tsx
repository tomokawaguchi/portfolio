import AboutFeature from "../../components/Aboutfeature/AboutFeature";
import Button from "../../components/Button/Button";
import Tag from "../../components/Tag/Tag";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<section className={styles.aboutSection}>
			<Tag tagText="PORTFOLIO" />
			<h1 className={styles.heading}>
				Hi, I’m Tomo <span className={styles.innerText}>Jr. Software Engineer</span>
			</h1>
			<p className={styles.para}>
				Former website project manager turned web developer and full stack developer upon completion of my training course at _nology.
			</p>
			<Button buttonText="See All Projects" buttonType="arrow-right" linkTo="/projects" />
			<div className={styles.aboutFeatures}>
				<AboutFeature
					iconType="year"
					headingNumber="3.5+"
					headingUnit="years"
					paraText="Tech industry experiences as Freelance Developer, Project Manager and Customer support."
				/>
				<AboutFeature
					iconType="skills"
					headingNumber="10+"
					headingUnit="skills"
					paraText="Experienced in HTML, CSS, SCSS, JavaScript, ReactJS, TypeScript, NestJS, Jest, Java, Spring, MySQL"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
