import styles from "./ProjectPage.module.css";
import { RiGithubLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";
import { projects } from "../../assets/data/contents.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { defaultProject } from "../../types";
import Button from "../../components/Button/Button";

const ProjectPage = () => {
	const { id } = useParams();
	const [currentProject, setCurrentProject] = useState<defaultProject>();

	useEffect(() => {
		const filtered = projects.find((project) => project.id === Number(id));
		setCurrentProject(filtered);
	}, [id]);

	return (
		<main id={styles.main}>
			<div className={styles.mainInner}>
				{projects && projects.length > 0 ? (
					<section className={styles.contentSec}>
						<h1>{currentProject?.title}</h1>
						<ul className={styles.tagList}>
							{currentProject?.techStack &&
								currentProject?.techStack.length > 0 &&
								currentProject?.techStack.map((tech, i) => <li key={i}>{tech}</li>)}
						</ul>
						<ul className={styles.linksList}>
							<li>
								<RiGithubLine />
								{currentProject?.github ? (
									<a href={currentProject?.github} target="__blank">
										{currentProject?.github}
									</a>
								) : (
									<p>Github repository not available.</p>
								)}
							</li>
							<li>
								<BsGlobe2 />
								{currentProject?.liveSite ? (
									<a href={currentProject?.liveSite} target="__blank">
										{currentProject?.liveSite}
									</a>
								) : (
									<p>Live site link not available.</p>
								)}
							</li>
						</ul>
						<p className={styles.para}>{currentProject?.content}</p>

						<h2>Features of App/Project</h2>
						<ul className={styles.featuresList}>
							{currentProject?.features &&
								currentProject?.features.length > 0 &&
								currentProject?.features.map((point, i) => <li key={i}>{point}</li>)}
						</ul>
						<img src={`../${currentProject?.image}`} alt={currentProject?.title} className={styles.img} />

						<Button buttonType="arrow-left" buttonText="Go Back To List" linkTo="/projects" />
					</section>
				) : (
					<p>There is no content available.</p>
				)}
			</div>
		</main>
	);
};

export default ProjectPage;
